const CACHE_PREFIX = 'github-repo-meta:';
const CACHE_TTL_MS = 1000 * 60 * 60 * 6;

export type GitHubMetaStatus =
  | 'ok'
  | 'missing_url'
  | 'invalid_url'
  | 'private_or_unavailable'
  | 'rate_limited'
  | 'error';

export type GitHubRepoMetaResult = {
  status: GitHubMetaStatus;
  message: string;
  owner?: string;
  repo?: string;
  stars?: number;
  forks?: number;
  openIssues?: number;
  language?: string;
  lastPushAt?: string;
};

type GitHubRepoInfo = {
  owner: string;
  repo: string;
  fullName: string;
};

type CachedMeta = {
  savedAt: number;
  value: GitHubRepoMetaResult;
};

type GitHubRepoResponse = {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  pushed_at: string;
};

function parseGitHubRepo(url: string): GitHubRepoInfo | null {
  try {
    const parsed = new URL(url);
    const isGitHubHost =
      parsed.hostname === 'github.com' || parsed.hostname === 'www.github.com';

    if (!isGitHubHost) {
      return null;
    }

    const [owner, rawRepo] = parsed.pathname
      .split('/')
      .filter(Boolean)
      .slice(0, 2);

    if (!owner || !rawRepo) {
      return null;
    }

    const repo = rawRepo.replace(/\.git$/i, '');

    if (!repo) {
      return null;
    }

    return {
      owner,
      repo,
      fullName: `${owner}/${repo}`,
    };
  } catch {
    return null;
  }
}

function getCached(fullName: string): GitHubRepoMetaResult | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(`${CACHE_PREFIX}${fullName}`);

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as CachedMeta;
    const isExpired = Date.now() - parsed.savedAt > CACHE_TTL_MS;

    if (isExpired) {
      window.localStorage.removeItem(`${CACHE_PREFIX}${fullName}`);
      return null;
    }

    return parsed.value;
  } catch {
    window.localStorage.removeItem(`${CACHE_PREFIX}${fullName}`);
    return null;
  }
}

function setCached(fullName: string, value: GitHubRepoMetaResult) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload: CachedMeta = {
    savedAt: Date.now(),
    value,
  };

  window.localStorage.setItem(`${CACHE_PREFIX}${fullName}`, JSON.stringify(payload));
}

export async function fetchGitHubRepoMeta(
  githubUrl?: string,
): Promise<GitHubRepoMetaResult> {
  if (!githubUrl) {
    return {
      status: 'missing_url',
      message: 'No GitHub repository linked for this project.',
    };
  }

  const repoInfo = parseGitHubRepo(githubUrl);

  if (!repoInfo) {
    return {
      status: 'invalid_url',
      message: 'GitHub link is not a valid repository URL.',
    };
  }

  const cached = getCached(repoInfo.fullName);
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      },
    );

    if (response.status === 404) {
      const fallback: GitHubRepoMetaResult = {
        status: 'private_or_unavailable',
        owner: repoInfo.owner,
        repo: repoInfo.repo,
        message: 'Repository is private or unavailable through the public API.',
      };
      setCached(repoInfo.fullName, fallback);
      return fallback;
    }

    if (response.status === 403) {
      const rateRemaining = response.headers.get('x-ratelimit-remaining');
      const fallback: GitHubRepoMetaResult = {
        status: rateRemaining === '0' ? 'rate_limited' : 'private_or_unavailable',
        owner: repoInfo.owner,
        repo: repoInfo.repo,
        message:
          rateRemaining === '0'
            ? 'GitHub API rate limit reached. Showing fallback data.'
            : 'Repository details are not accessible with the current API access.',
      };
      setCached(repoInfo.fullName, fallback);
      return fallback;
    }

    if (!response.ok) {
      return {
        status: 'error',
        owner: repoInfo.owner,
        repo: repoInfo.repo,
        message: 'Could not fetch GitHub metadata right now.',
      };
    }

    const data = (await response.json()) as GitHubRepoResponse;

    const result: GitHubRepoMetaResult = {
      status: 'ok',
      owner: repoInfo.owner,
      repo: repoInfo.repo,
      stars: data.stargazers_count,
      forks: data.forks_count,
      openIssues: data.open_issues_count,
      language: data.language ?? 'Unknown',
      lastPushAt: data.pushed_at,
      message: 'Live repository details loaded.',
    };

    setCached(repoInfo.fullName, result);
    return result;
  } catch {
    return {
      status: 'error',
      owner: repoInfo.owner,
      repo: repoInfo.repo,
      message: 'Network error while loading GitHub metadata.',
    };
  }
}
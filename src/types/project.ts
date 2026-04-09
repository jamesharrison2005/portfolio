export type ProjectCategory = 'software-development' | 'data-science' | 'other';

export type Project = {
  category: ProjectCategory;
  image: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

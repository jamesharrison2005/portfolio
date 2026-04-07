import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal site to showcase projects, skills, and contact info.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/yourname/portfolio',
    liveUrl: 'https://your-portfolio.example.com',
  },
  {
    title: 'Task Tracker App',
    description: 'A lightweight productivity app with categories and due dates.',
    tech: ['React', 'Vite', 'Local Storage'],
    repoUrl: 'https://github.com/yourname/task-tracker',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather app with search history and 5-day forecasts.',
    tech: ['TypeScript', 'REST API', 'Tailwind CSS'],
    repoUrl: 'https://github.com/yourname/weather-dashboard',
  },
];

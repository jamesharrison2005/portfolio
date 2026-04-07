import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    image: '/src/assets/project-portfolio.svg',
    title: 'Portfolio Website',
    description: 'A personal site to showcase projects, skills, and contact info.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourname/portfolio',
    liveUrl: 'https://your-portfolio.example.com',
  },
  {
    image: '/src/assets/project-task-tracker.svg',
    title: 'Task Tracker App',
    description: 'A lightweight productivity app with categories and due dates.',
    tech: ['React', 'Vite', 'Local Storage'],
    githubUrl: 'https://github.com/yourname/task-tracker',
    liveUrl: 'https://your-task-tracker.example.com',
  },
  {
    image: '/src/assets/project-weather.svg',
    title: 'Weather Dashboard',
    description: 'A weather app with search history and 5-day forecasts.',
    tech: ['TypeScript', 'REST API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourname/weather-dashboard',
    liveUrl: 'https://your-weather-dashboard.example.com',
  },
];

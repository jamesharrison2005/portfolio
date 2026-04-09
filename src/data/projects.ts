import type { Project } from '../types/project';
import portfolioPreview from '../assets/project-portfolio.svg';
import taskTrackerPreview from '../assets/project-task-tracker.svg';
import weatherPreview from '../assets/project-weather.svg';

export const projects: Project[] = [
  {
    category: 'software-development',
    image: portfolioPreview,
    title: 'Portfolio Website',
    description: 'A personal site to showcase projects, skills, and contact info.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git/GitHub'],
    githubUrl: 'https://github.com/jamesharrison2005/portfolio',
  },
  {
    category: 'software-development',
    image: taskTrackerPreview,
    title: 'Allergen Detection Application',
    description: 'A lightweight app proving barcode and text scanning to identify allergens in a large set of products',
    tech: ['Flutter', 'Dart', 'APIs', 'Firebase','SQL', 'Figma', 'UX Design', 'GitHub'],
    githubUrl: 'https://github.com/yourname/task-tracker',
  },
    {
    category: 'software-development',
    image: taskTrackerPreview,
    title: 'Mars-Weather Comparison APP',
    description: 'Utilises NASA and OpenWeather APIs to parse, display and compare weather data',
    tech: ['Flutter', 'Dart', 'APIs', 'Firebase','UX Design', 'Product Evaluation', 'Github'],
    githubUrl: 'https://github.com/yourname/task-tracker',
  },
  {
    category: 'data-science',
    image: weatherPreview,
    title: 'COVID-19 Prevalence',
    description: 'An analysis on COVID-19 dataset and its world-wide prevalence',
    tech: ['Google Colab', 'Python', 'Pandas', 'NumPy', 'MatplotLib'],
    githubUrl: 'https://github.com/jamesharrison2005/Analysis-on-the-Prevalence-of-Covid-19',
    
  },
    {
    category: 'data-science',
    image: weatherPreview,
    title: 'Top IMDB Movie Analysis and Prediction',
    description: 'An analysis on the 1000 top IMDB movies and predicting which features contribute the highest succes rates',
    tech: ['Google Colab', 'Python', 'Pandas', 'NumPy', 'MatplotLib', 'Sklearn'],
    githubUrl: 'https://github.com/jamesharrison2005/IMDB-movie-feature-predictions',
  },
  {
    category: 'other',
    image: weatherPreview,
    title: 'HTML-ICS calendar converter',
    description: 'Developed a python parser which parsed university timetable html into an ics file for online calendars',
    tech: ['Python', 'Python', 'BeautifulSoup',],
    githubUrl: 'https://github.com/jamesharrison2005/Convert-Timetable-HTML--to-ICS',
  },
];

import type { Project } from '../types/project';
import portfolioPreview from '../assets/project-portfolio.svg';
import allergenDetectionPreview from '../assets/project-allergen-detection.svg';
import emotionDeepLearningPreview from '../assets/project-emotion-deep-learning.svg';
import emotionTraditionalPreview from '../assets/project-emotion-traditional.svg';
import htmlIcsPreview from '../assets/project-html-ics.svg';
import imdbAnalysisPreview from '../assets/project-imdb-analysis.svg';
import marsWeatherPreview from '../assets/project-mars-weather.svg';
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
    image: allergenDetectionPreview,
    title: 'Allergen Detection Application',
    description: 'A lightweight app proving barcode and text scanning to identify allergens in a large set of products',
    tech: ['Flutter', 'Dart', 'APIs', 'Firebase','SQL', 'Figma', 'UX Design', 'GitHub'],
    githubUrl: 'https://github.com/jamesharrison2005/AllergenDetectionApp',
  },
    {
    category: 'software-development',
    image: marsWeatherPreview,
    title: 'Mars-Weather Comparison APP',
    description: 'Utilises NASA and OpenWeather APIs to parse, display and compare weather data',
    tech: ['Flutter', 'Dart', 'APIs', 'Firebase','UX Design', 'Product Evaluation', 'Github'],
    githubUrl: 'https://github.com/jamesharrison2005/mars_weather_app',
  },
  {
    category: 'data-science',
    image: weatherPreview,
    title: 'COVID-19 Prevalence',
    description: 'An analysis on COVID-19 dataset and its world-wide prevalence',
    tech: ['Google Colab', 'Python', 'Pandas', 'NumPy', 'MatplotLib'],
  },
    {
    category: 'data-science',
    image: imdbAnalysisPreview,
    title: 'Top IMDB Movie Analysis and Prediction',
    description: 'An analysis on the 1000 top IMDB movies and predicting which features contribute the highest succes rates',
    tech: ['Google Colab', 'Python', 'Pandas', 'NumPy', 'MatplotLib', 'Sklearn'],
    githubUrl: 'https://github.com/jamesharrison2005/IMDB-movie-feature-predictions',
  },
  {
    category: 'other',
    image: htmlIcsPreview,
    title: 'HTML-ICS calendar converter',
    description: 'Developed a python parser which parsed university timetable html into an ics file for online calendars',
    tech: ['Python','BeautifulSoup',],
    githubUrl: 'https://github.com/jamesharrison2005/Convert-Timetable-HTML--to-ICS',
  },
    {
    category: 'other',
    image: emotionTraditionalPreview,
    title: 'Emotion Facial Recognition Using Traditional Learning',
    description: 'Measured and evaluated the Accuracy of a Decision tree using LBP and HOG feature extraction',
    tech: ['Python', 'SkLearn', 'Pandas', 'NumPy', 'MatplotLib'],
    githubUrl: 'https://github.com/jamesharrison2005/Convert-Timetable-HTML--to-ICS',
  },
    {
    category: 'other',
    image: emotionDeepLearningPreview,
    title: 'Emotion Facial Recognition Using Deep Learning',
    description: 'Evaluated a Convolutional Neural Network with AlexNet architecture against traditional learning',
    tech: ['Python', 'Pandas', 'NumPy', 'MatplotLib', 'Seaborn', 'Pytorch'],
    githubUrl: 'https://github.com/jamesharrison2005/Convert-Timetable-HTML--to-ICS',
  },
];

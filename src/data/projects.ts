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
    deepDive: [
      'Designed as a retro terminal-inspired interface with collapsible sections and scroll-based reveals.',
      'Built reusable section and card components so new projects can be added from one data file.',
      'Focused on responsive layout and semantic structure for better accessibility across devices.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git/GitHub'],
    githubUrl: 'https://github.com/jamesharrison2005/portfolio',
  },
  {
    category: 'software-development',
    image: allergenDetectionPreview,
    title: 'Allergen Detection Application',
    description: 'A lightweight app proving barcode and text scanning to identify allergens in a large set of products',
    deepDive: [
      'Implemented barcode and OCR scanning flows to reduce manual ingredient checking for users.',
      'Connected to a product dataset and allergen rules to return clear safety guidance quickly.',
      'Designed for low-friction interaction so scan, verify, and decision steps stay under a few taps.',
    ],
    tech: ['Flutter', 'Dart', 'APIs', 'Firebase','SQL', 'Figma', 'UX Design', 'GitHub'],
    githubUrl: 'https://github.com/jamesharrison2005/AllergenDetectionApp',
  },
    {
    category: 'software-development',
    image: marsWeatherPreview,
    title: 'Mars-Weather Comparison APP',
    description: 'Utilises NASA and OpenWeather APIs to parse, display and compare weather data',
    deepDive: [
      'Merged two API schemas into a normalized model to compare Mars and Earth conditions side by side.',
      'Handled missing and delayed telemetry with defensive parsing and user-facing status states.',
      'Presented historical trends with a mobile-friendly UI to make scientific data easier to read.',
    ],
    tech: ['Flutter', 'Dart', 'APIs', 'Firebase','UX Design', 'Product Evaluation', 'Github'],
    githubUrl: 'https://github.com/jamesharrison2005/mars_weather_app',
  },
  {
    category: 'data-science',
    image: weatherPreview,
    title: 'COVID-19 Prevalence',
    description: 'An analysis on COVID-19 dataset and its world-wide prevalence',
    deepDive: [
      'Cleaned and merged regional datasets to align timelines before modeling prevalence trends.',
      'Built exploratory visuals to highlight spikes, plateaus, and differences between countries.',
      'Documented assumptions and data quality limits to keep interpretation grounded in context.',
    ],
    tech: ['Google Colab', 'Python', 'Pandas', 'NumPy', 'MatplotLib'],
  },
    {
    category: 'data-science',
    image: imdbAnalysisPreview,
    title: 'Top IMDB Movie Analysis and Prediction',
    description: 'An analysis on the 1000 top IMDB movies and predicting which features contribute the highest succes rates',
    deepDive: [
      'Engineered categorical and numerical features from the top 1000 movies dataset for model training.',
      'Compared feature influence across model variants to identify what most impacts high ratings.',
      'Validated outcomes with held-out data and visualized the strongest predictive signals.',
    ],
    tech: ['Google Colab', 'Python', 'Pandas', 'NumPy', 'MatplotLib', 'Sklearn'],
    githubUrl: 'https://github.com/jamesharrison2005/IMDB-movie-feature-predictions',
  },
  {
    category: 'other',
    image: htmlIcsPreview,
    title: 'HTML-ICS calendar converter',
    description: 'Developed a python parser which parsed university timetable html into an ics file for online calendars',
    deepDive: [
      'Parsed inconsistent timetable HTML structures into a reliable intermediate event model.',
      'Generated standards-compliant ICS output so events import cleanly into major calendar apps.',
      'Reduced repetitive setup for students by automating timetable-to-calendar conversion.',
    ],
    tech: ['Python','BeautifulSoup',],
    githubUrl: 'https://github.com/jamesharrison2005/Convert-Timetable-HTML--to-ICS',
  },
    {
    category: 'other',
    image: emotionTraditionalPreview,
    title: 'Emotion Facial Recognition Using Traditional Learning',
    description: 'Measured and evaluated the Accuracy of a Decision tree using LBP and HOG feature extraction',
    deepDive: [
      'Benchmarked LBP and HOG feature pipelines to evaluate trade-offs in speed and accuracy.',
      'Trained and assessed a decision tree classifier with class-level precision and recall metrics.',
      'Used confusion matrix analysis to identify emotion classes that were frequently misclassified.',
    ],
    tech: ['Python', 'SkLearn', 'Pandas', 'NumPy', 'MatplotLib'],
    githubUrl: 'https://github.com/jamesharrison2005/Convert-Timetable-HTML--to-ICS',
  },
    {
    category: 'other',
    image: emotionDeepLearningPreview,
    title: 'Emotion Facial Recognition Using Deep Learning',
    description: 'Evaluated a Convolutional Neural Network with AlexNet architecture against traditional learning',
    deepDive: [
      'Implemented an AlexNet-style CNN pipeline with preprocessing tuned for facial expression data.',
      'Compared deep learning performance against traditional approaches using the same evaluation setup.',
      'Analyzed failure cases to understand where data diversity and class imbalance impacted results.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'MatplotLib', 'Seaborn', 'Pytorch'],
    githubUrl: 'https://github.com/jamesharrison2005/FER-CNN-AlexNet',
  },
];

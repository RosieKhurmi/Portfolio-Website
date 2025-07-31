import DataAnalysisImg from '../../../assets/Code/DataAnalysis.png';
import SMSImg from '../../../assets/Code/SMS.png';
import PantryPalImg from '../../../assets/Code/PantryPal.png';
import Racing from '../../../assets/Code/Racing.jpg';
import HackHive from '../../../assets/Code/HackHive.jpg';
import SocialSim from '../../../assets/Code/SocialSim.png';
import StackSketch from '../../../assets/Code/StackSketch.png';

const types = [
    'Software', 
    'AI/ML', 
    'Data Analysis', 
    'Games',
    'Extracurriculars'
]

export const projectsData = [
    {
        id: 'Music Analysis',
        code: "../../assests/MusicAnalysis.ipynb",
        type: types[2],
        img: DataAnalysisImg, 
        tech: 'Python, Pandas, Matplotlib',
        text: 'A data analysis project that explores the relationship between music features and popularity. The project uses the Spotify API to collect data on songs and analyzes the relationship between features such as tempo, energy, and danceability.'
    }, 
    {
        id: 'SMS Spam Detector',
        code: "https://github.com/RosieKhurmi/SMSDetector.git",
        type: types[1],
        img: SMSImg, 
        tech: 'Python, Scikit-learn, NLTK',
        text: 'An SMS spam detector that uses natural language processing (NLP) techniques to classify messages as spam or ham. The detector uses a machine learning model trained on a dataset of SMS messages to predict whether a message is spam or ham.'
    }, 
    {
        id: 'HackHive 2025 Website',
        code: "https://github.com/RosieKhurmi/HackHive",
        type: types[4],
        img: HackHive,
        tech: 'Angular, TypeScript',
        text: "Built the HackHive 2025 website with Angular & TypeScript, providing intuitive navigation and accessibility for a seamless hackathon experience."
    }, 
    {
        id: "Ontario Tech Racing - 2024 - 2025",
        code: "https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/ontario-tech-racing.php",
        type: types[4],
        img: Racing,
        tech: 'Python, FastAPI',
        text: "Initiated and led the backend development of a CFD simulation interface for the Ontario Tech Racing team. Built a FastAPI-based backend granting engineers premission to run computational fluid dynamics simulations on the in-house server."
    },
    {
        id: "HackHive Hackathon First Place Winner",
        code: "https://github.com/smutharasan/PantryPal.git",
        type: types[4],
        img: PantryPalImg,
        tech: 'React, Azure, OpenAI, Spoonacular API',
        text: "PantryPal is an AI-powered web app that generates recipes from an ingredients list using React, Azure, OpenAI, and Spoonacular API.",
    },
    {
        id: "StackSketch",
        code: "https://github.com/NightingaleX03/SpurHacks",
        type: types[1],
        img: StackSketch,
        tech: 'FastAPI, Angular, Gemini, PyTorch, Hugging Face',
        text: "A tool that uses AI to generate software system diagrams based on user prompts",
    }, 
    {
        id: "SocialSim",
        code: "https://github.com/hack-the-6ix-2025/SocialSim",
        type: types[1],
        img: SocialSim,
        tech: 'TwelveLabs summarizer/embedding, Gemini API, Google Cloud, SciKit',
        text: "AI Social Skills Training Platform for Healthcare, Law Enforcement, Education & Social Work Professionals",
    }
];

export const projectsNav = [

    {
        name: 'All'
    },
    {
        name: types[0],
    },
    {
        name: types[1]
    },
    {
        name: types[2]
    },
    {
        name: types[3]
    },
    {
        name: types[4]
    }

];
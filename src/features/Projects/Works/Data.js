import SMSImg from '../../../assets/Code/SMS.png';
import PantryPalImg from '../../../assets/Code/PantryPal.png';
import Racing from '../../../assets/Code/Racing.jpg';
import HackHive from '../../../assets/Code/HackHive.jpg';
import SocialSim from '../../../assets/Code/SocialSim.png';
import StackSketch from '../../../assets/Code/StackSketch.png';

export const projectsData = [
    {
        id: 'SMS Spam Detector',
        code: "https://github.com/RosieKhurmi/SMSDetector.git",
        type: 'AI/ML',
        img: SMSImg, 
        tech: 'Python, Scikit-learn, NLTK',
        text: 'An SMS spam detector that uses natural language processing (NLP) techniques to classify messages as spam or ham. The detector uses a machine learning model trained on a dataset of SMS messages to predict whether a message is spam or ham.'
    }, 
    {
        id: 'HackHive 2025 Website',
        code: "https://github.com/RosieKhurmi/HackHive",
        type: 'Extracurriculars',
        img: HackHive,
        tech: 'Angular, TypeScript',
        text: "Built the HackHive 2025 website with Angular & TypeScript, providing intuitive navigation and accessibility for a seamless hackathon experience."
    }, 
    {
        id: "Ontario Tech Racing - 2024 - 2025",
        code: "https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/ontario-tech-racing.php",
        type: 'Extracurriculars',
        img: Racing,
        tech: 'Python, FastAPI',
        label: 'Team Page',
        text: "Led the backend development of the CFD simulation interface for the Ontario Tech Racing team. (Code is not publicly available.)"
    },
    {
        id: "HackHive Hackathon First Place Winner",
        code: "https://github.com/smutharasan/PantryPal.git",
        type: 'Software',
        img: PantryPalImg,
        tech: 'React, Azure, OpenAI, Spoonacular API',
        text: "PantryPal is an AI-powered web app that generates recipes from an ingredients list using React, Azure, OpenAI, and Spoonacular API.",
    },
    {
        id: "StackSketch",
        code: "https://github.com/NightingaleX03/SpurHacks",
        type: 'AI/ML',
        img: StackSketch,
        tech: 'FastAPI, Angular, Gemini, PyTorch, Hugging Face',
        text: "A tool that uses AI to generate software system diagrams based on user prompts",
    }, 
    {
        id: "SocialSim",
        code: "https://github.com/hack-the-6ix-2025/SocialSim",
        type: 'AI/ML',
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
        name: 'Software',
    },
    {
        name: 'AI/ML',
    },
    {
        name: 'Extracurriculars',
    },
];


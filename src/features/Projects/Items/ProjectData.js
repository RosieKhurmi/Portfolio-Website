import SMSImg from '../../../assets/Code/SMS.png';
import PantryPalImg from '../../../assets/Code/PantryPal.png';
import AppTracker from '../../../assets/Code/AppTracker.png';
import SocialSim from '../../../assets/Code/SocialSim.png';
import StackSketch from '../../../assets/Code/StackSketch.png';

export const projectsData = [
    {
        id: 'SMS Spam Detector',
        code: "https://github.com/RosieKhurmi/SMSDetector.git",
        img: SMSImg, 
        tech: ['Python', 'Scikit-learn', 'NLTK'],
        text: 'An SMS spam detector that uses natural language processing (NLP) techniques to classify messages as spam or ham. The detector uses a machine learning model trained on a dataset of SMS messages to predict whether a message is spam or ham.'
    }, 
    {
        id: 'AppTracker',
        code: "https://github.com/RosieKhurmi/AppTracker",
        img: AppTracker,
        tech: ['JavaScript', 'Chrome Extension', 'Google Apps Script', 'REST API'],
        text: "A Chrome extension that automatically captures job applications and logs them directly to a Google Sheet via Apps Script."
    }, 
    {
        id: "PantryPal - HackHive 2024 Winner",
        code: "https://github.com/smutharasan/PantryPal.git",
        img: PantryPalImg,
        tech: ['React', 'Azure', 'OpenAI', 'Spoonacular API'],
        text: "PantryPal is an AI-powered web app that generates recipes from an ingredients list using React, Azure, OpenAI, and Spoonacular API.",
    },
    {
        id: "StackSketch - SpurHacks 2025",
        code: "https://github.com/NightingaleX03/SpurHacks",
        img: StackSketch,
        tech: ['FastAPI', 'Angular', 'Gemini', 'PyTorch', 'Hugging Face'],
        text: "A tool that uses AI to generate software system diagrams based on user prompts",
    }, 
    {
        id: "SocialSim - Hack the 6ix 2025",
        code: "https://github.com/hack-the-6ix-2025/SocialSim",
        img: SocialSim,
        tech: ['TwelveLabs summarizer/embedding', 'Gemini API', 'Google Cloud', 'SciKit'],
        text: "AI Social Skills Training Platform for Healthcare, Law Enforcement, Education & Social Work Professionals",
    }
];


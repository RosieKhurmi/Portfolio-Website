import PantryPalImg from '../../assets/Code/PantryPal.png';
import Racing from '../../assets/Code/Racing.jpg';
import HackHive from '../../assets/Code/HackHive.jpg';

export const ExtracurricularNames = [
    'Hackathons',
    'Ontario Tech Racing',
    'Computer Science Club'
];

export const ExtracurricularsDetails = [
    {
        id: ExtracurricularNames[0],  
        projects: [
            {
                title: 'Hackhive Hackathon First Place Winner',
                year: 'Feb 2024',
                code: 'https://github.com/smutharasan/PantryPal.git',
                text: 'PantryPal is an AI-powered web app that generates recipes from an ingredients list using React, Azure, OpenAI, and Spoonacular API.',
                img: PantryPalImg,
            }
        ]
    },
    {
        id: ExtracurricularNames[1],  // Ontario Tech Racing
        text: 'Backend Developer Lead',
        description: 'Leading a team of developers to create a CFD simulation interface for the Ontario Tech Racing team',
        projects: [
            {
                title: 'CFD Simulation Interface',
                code: "https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/ontario-tech-racing.php",
                text: 'Developed a FastAPI interface that allows engineers to run computational fluid dynamics simulations on the in-house server.',
                img: Racing
            }
        ]
    },
    {
        id: ExtracurricularNames[2],  // Computer Science Club
        text: 'Vice President of Marketing',
        description: 'Leading a team to create and execute all marketing strategies for the OTU CS Club',
        projects: [
            {
                title: 'HackHive 2025 Website',
                code: "https://github.com/RosieKhurmi/HackHive",
                text: "Built the HackHive 2025 website with Angular & TypeScript, providing intuitive navigation and accessibility for a seamless hackathon experience.",
                img: HackHive
            }, 
            {
                title: 'Marketing Initiatives',
                code: 'https://linktr.ee/otucsclub',
                text: 'Led marketing campaigns, creating social media content and promotional materials to drive engagement for all club events.',
            }
        ]
    }
];

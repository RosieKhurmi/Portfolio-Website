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
                text: 'We developed PantryPal, a web application that helps uses AI to turn your ingredients into delicious recipes and guides you through the cooking process. The application was built using React, Azure, OpenAI, and Spoonacular API.',
                img: PantryPalImg,
            }
        ]
    },
    {
        id: ExtracurricularNames[1],  // Ontario Tech Racing
        text: 'Backend Developer Lead | Software Team',
        description: 'Leading a team of developers to create a CFD simulation interface for the Ontario Tech Racing team',
        projects: [
            {
                title: 'CFD Simulation Interface',
                code: "https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/ontario-tech-racing.php",
                text: 'A graphical user interface for engineers to run in-house computational fluid dynamics simulations hosted on a local server. The interface allows users to input parameters for the simulation, run the simulation, and view the results. Built using FastAPI, WireGuard for security, and Docker for deployment.',
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
                code: "https://hackhive.ca/",
                text: "The HackHive 2025 website, built with Angular and TypeScript, provided students with easy access to essential information and resources, enhancing their hackathon experience by ensuring seamless navigation and accessibility.",
                img: HackHive
            }, 
            {
                title: 'Marketing Initiatives',
                code: 'https://linktr.ee/otucsclub',
                text: 'Created and managed marketing campaigns for the club, including social media posts promotional materials for all club events.',
            }
        ]
    }
];

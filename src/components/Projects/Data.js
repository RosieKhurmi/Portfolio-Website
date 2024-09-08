import CalendarImg from '../../assets/Code/Calendar.PNG';
import TicTacToeImg from '../../assets/Code/TicTacToe.PNG';
import PantryPalImg from '../../assets/Code/PantryPal.png';
import DataAnalysisImg from '../../assets/Code/DataAnalysis.png';
import SMSImg from '../../assets/Code/SMS.png';
// import ChatImg from '../../assets/Code/Chat.PNG';
import MovieImg from '../../assets/Code/Movie.PNG';
import CFDSimulationImg from '../../assets/Code/CFDSimulator.png';
import ASLTranslatorImg from '../../assets/Code/ASLTranslator.png';
import CVForgeImg from '../../assets/Code/CVForge.png';
import PacmanImg from '../../assets/Code/Pacman.png';

const types = ['Software', 'AR/VR', 'AI/ML', 'Data Analysis', 'Games']

// Add chat

export const projectsData = [

    {
        id: 'Calendar',
        code: 'https://github.com/RosieKhurmi/Calendar.git',
        type: types[0],
        img: CalendarImg
    },
    {
        id: 'Tic Tac Toe',
        code: 'https://github.com/RosieKhurmi/Tic-Tac-Toe',
        type: types[4],
        img: TicTacToeImg
    },
    {
        id: 'PantryPal',
        code: 'https://github.com/smutharasan/PantryPal.git',
        type: types[2],
        img: PantryPalImg
    },
    {
        id: 'CFD Simulator Interface',
        code: "https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/ontario-tech-racing.php",
        type: types[0],
        img: CFDSimulationImg
    },
    {
        id: 'Music Analysis',
        code: "../../assests/MusicAnalysis.ipynb",
        type: types[3],
        img: DataAnalysisImg
    }, 
    {
        id: 'SMS Spam Detector',
        code: "https://github.com/RosieKhurmi/SMSDetector.git",
        type: [types[2], types[3]],
        img: SMSImg
    },
    {
        id: 'Sign Translator',
        code: "https://github.com/RosieKhurmi/SignTranlsator",
        type: types[1],
        img: ASLTranslatorImg
    }, 
    {
        id: 'Movie Playlist',
        code: "https://github.com/RosieKhurmi/MoviePlaylist",
        type: types[0],
        img: MovieImg
    }, 
    {
        id: 'CVForge',
        code: 'https://github.com/CVForgeOrg',
        type: types[2],
        img: CVForgeImg
    }, 
    {
        id: 'Pacman',
        code: 'https://github.com/RosieKhurmi/Pacman',
        type: types[4],
        img: PacmanImg
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
    },

];
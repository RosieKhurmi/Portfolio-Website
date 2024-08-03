import CalendarImg from '../../assets/Code/Calendar.PNG';
import TicTacToeImg from '../../assets/Code/TicTacToe.PNG';
import PantryPalImg from '../../assets/Code/PantryPal.png';
import DataAnalysisImg from '../../assets/Code/DataAnalysis.png';
import SMSImg from '../../assets/Code/SMS.png';
import ChatImg from '../../assets/Code/Chat.PNG';
import MovieImg from '../../assets/Code/Movie.PNG';
import CFDSimulationImg from '../../assets/Code/CFDSimulator.png';
import ASLTranslatorImg from '../../assets/Code/ASLTranslator.png';

const types = ['Software', 'AR/VR', 'AI/ML', 'Data Analysis']

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
        type: types[2],
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
        code: '',
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
        id: 'Spam Detector',
        code: "https://github.com/RosieKhurmi/SpamDetector.git",
        type: [types[2], types[3]],
        img: SMSImg
    },
    {
        id: 'Sign Translator',
        code: "https://github.com/rkhurmi/Sign_Translator",
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
        img: MovieImg
    }, 

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

];
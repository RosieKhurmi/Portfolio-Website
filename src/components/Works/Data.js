import CalendarImg from '../../assets/Code/Calendar.PNG';
import TicTacToeImg from '../../assets/Code/TicTacToe.PNG';
import DataAnalysisImg from '../../assets/Code/DataAnalysis.png';
import SMSImg from '../../assets/Code/SMS.png';

const types = [
    'Software', 
    'AI/ML', 
    'Data Analysis', 
    'Games'
]

export const projectsData = [

    {
        id: 'Calendar',
        code: 'https://github.com/RosieKhurmi/Calendar.git',
        type: types[0],
        img: CalendarImg,
        text: 'A simple calendar application that allows users to add, edit, and delete events. The application also allows users to view events on a daily, weekly, or monthly basis.'
    },
    {
        id: 'Tic Tac Toe',
        code: 'https://github.com/RosieKhurmi/Tic-Tac-Toe',
        type: types[3],
        img: TicTacToeImg,
        text: 'A simple tic-tac-toe game that allows two players to play against each other. The game also keeps track of the score and allows players to reset the game.'
    },
    {
        id: 'Music Analysis',
        code: "../../assests/MusicAnalysis.ipynb",
        type: types[2],
        img: DataAnalysisImg, 
        text: 'A data analysis project that explores the relationship between music features and popularity. The project uses the Spotify API to collect data on songs and analyzes the relationship between features such as tempo, energy, and danceability.'
    }, 
    {
        id: 'SMS Spam Detector',
        code: "https://github.com/RosieKhurmi/SMSDetector.git",
        type: types[1],
        img: SMSImg, 
        text: 'An SMS spam detector that uses natural language processing (NLP) techniques to classify messages as spam or ham. The detector uses a machine learning model trained on a dataset of SMS messages to predict whether a message is spam or ham.'
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
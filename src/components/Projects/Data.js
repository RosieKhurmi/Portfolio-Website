import Cal from "../../assests/Code/Calendar.PNG"
import TicTacToe from "../../assests/Code/TicTacToe.PNG"
import Music from "../../assests/Code/DataAnalysis.png"
import MusicCode from "../../assests/MusicAnalysis.ipynb"
import PantryPal from "../../assests/Code/PantryPal.png"

const types = ['Software', 'AR/VR', 'Artificial Intelligence', 'Data Analysis']

export const projectsData = [

    {
        id: 'Calendar',
        code: 'https://github.com/RosieKhurmi/Calendar.git',
        type: types[0],
        img: Cal
    },
    {
        id: 'Tic Tac Toe',
        code: 'https://github.com/RosieKhurmi/Tic-Tac-Toe',
        type: types[0],
        img: TicTacToe
    },
    {
        id: 'Music Analysis',
        code: MusicCode,
        type: types[3],
        img: Music
    }, 
    {
        id: 'PantryPal',
        code: 'https://github.com/smutharasan/PantryPal.git',
        type: types[2],
        img: PantryPal
    },

];

export const projectsNav = [

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
import Cal from "../../assests/Code/Calendar.PNG"
import TicTacToe from "../../assests/Code/TicTacToe.PNG"
import Music from "../../assests/Code/DataAnalysis.png"
import MusicCode from "../../assests/MusicAnalysis.ipynb"
import PantryPal from "../../assests/Code/PantryPal.png"

export const projectsData = [

    {
        id: 'Calendar',
        code: 'https://github.com/RosieKhurmi/Calendar',
        type: 'Code',
        img: Cal
    },
    {
        id: 'Tic Tac Toe',
        code: 'https://github.com/RosieKhurmi/Tic-Tac-Toe',
        type: 'Code',
        img: TicTacToe
    },
    {
        id: 'Music Analysis',
        code: MusicCode,
        type: 'Projects',
        img: Music
    }, 
    {
        id: 'PantryPal',
        code: 'https://github.com/smutharasan/PantryPal.git',
        type: 'Projects',
        img: PantryPal
    },

];

export const projectsNav = [

    {
        name: 'All'
    },
    {
        name: 'Projects',
    },
    {
        name: 'Code',
    },

];
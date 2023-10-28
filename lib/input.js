//user input from questions
const input = [

    //text - up to 3 characters
    {
        type: 'input',
        name: 'text',
        message: `What is your logo's text?(Must use 3 characters):`,
    },

    //text color
    {
        type: 'list',
        name: 'textColor',
        message: 'What color would you like or your text?',
        choices: [
            //pick from 'hexadecimal' list or keyword color list
        ]
    },

    //shape
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: [
            'circle',
            'square',
            'triangle',
            ],
    },

    //shape color
    {
        type: 'list',
        name: 'shapeColor',
        message: 'What color would you like to use for your shape?',
        choices: [
            //pick from 'hexadecimal' list or keyword color list
            ],
    },

];

module.exports = input;
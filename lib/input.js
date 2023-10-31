//user input from questions
const input = [

    //text - up to 3 characters
    {
        type: 'input',
        name: 'text',
        message: `Pleae choose text for your logo (must use 3 characters):`,
    },

    //text color
    {
        type: 'list',
        name: 'textColor',
        message: 'What color would you like or your text?',
        choices: [
        'color keyword',
        'hexadecimal',
        ],
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
            'color keyword',
            'hexadecimal',
            ],
    },

];

module.exports = input;
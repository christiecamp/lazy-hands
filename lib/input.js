//user input from questions
const input = [

    //text - up to 3 characters
    {
        type: 'input',
        name: 'text',
        message: `Pleae choose text for your logo (must use 3 characters):`,
    },

    //validate 3 characters

    //UR-10-18 regex equation to incorporate in validation
    // Regex for only allowing uppercase, lowercase, numbers, dashes, and underscores.
    // const pattern = new RegExp('([A-Za-z0-9_-]+$)');


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

    //validate text color

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
    
    //validate shape color

];

module.exports = input;
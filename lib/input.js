//color keyword list
const colorKey = require('./shapes/colorKey');

//user input
const input = [

    //text - up to 3 characters
    {
        type: 'input',
        name: 'text',
        message: `What is the text for your logo? (must use 3 characters)`,
            //validate 3 characters
            validate: (output) => {
                if(output.length !== 3) {
                    return console.log("\n Text must include 3 characters");
                }
                return true;
            }
    },

    //text color choice prompt
    {
        type: 'list',
        name: 'textColorPrompt',
        message: 'Choose the color format for your text:',
        choices: [
        'color keyword',
        'hexadecimal',
        ],
    },

    //validation for text color keyword
    //importing from colorKey.js
    {
        type: 'list',
        name: 'textColor',
        message: 'Pick a color keyword for your text:',
        choices: colorKey,
            when: (output) => {
                if(output.textColorPrompt === 'color keyword') {
                    return true;
                }
                return false;
            },
            validate: (output) => {
                const color = 'color keyword'
                    if(!output.match(color)) {
                        return console.log("\n Pick a valid color keyword") //add a color keyword list?
                    }
                    return true;
            },

    },

    //validation for text hex #
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the hexadecimal number for your text (#ffffff):',
        //hexadecimal - using RegEx pattern
        //hexcode contains the alphabets(A-F) and integers(0-9) and is of length 3 or 6.RegExp is used to check whether the alphabets ranging between A and F, integers from 0-9, and is of length = 3 or 6.
            when: (output) => {
                if(output.textColorPrompt === 'hexadecimal') {
                    return true;
                }
                return false;
            },
            validate: (output) => {
                const hex = '^#[A-Fa-f0-9]{6}$'
                    if(!output.match(hex)) {
                        return console.log ("\n Enter a valid hexadecimal #")
                    }
                    return true;
            },
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
        name: 'shapeColorPrompt',
        message: 'Choose the color format for your shape',
        choices: [
            'color keyword',
            'hexadecimal',
            ],
    },

       //validation for shape color keyword
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Select the color keyword for your text:',
        choices: colorKey,
            when: (output) => {
                if(output.shapeColorPrompt === 'color keyword') {
                    return true;
                }
                return false;
            },
            validate: (output) => {
                const color = 'color keyword'
                    if(!output.match(color)) {
                        return console.log("\n Enter a valid color keyword") 
                    }
                    return true;
            },

    },

    //validation for shape hex #
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the hexadecimal number for your text (#ffffff):',
        //hexadecimal - using RegEx pattern
        //hexcode contains the alphabets(A-F) and integers(0-9) and is of length 3 or 6.RegExp is used to check whether the alphabets ranging between A and F, integers from 0-9, and is of length = 3 or 6.
            when: (output) => {
                if(output.shapeColorPrompt === 'hexadecimal') {
                    return true;
                }
                return false;
            },
            validate: (output) => {
                const hex = '^#[A-Fa-f0-9]{6}$'
                    if(!output.match(hex)) {
                        return console.log ("\n Enter a valid hexadecimal #")
                    }
                    return true;
            },
    },

];

module.exports = input;
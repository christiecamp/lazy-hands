//put hex and color in global? both are used for textColor and shapeColor with small variations
// const hex = hex;
// const color = color;

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

    //UR-10-18 RegEx equation to incorporate in validation
    //Regex for only allowing uppercase, lowercase, numbers, dashes, and underscores.
    //const pattern = new RegExp('([A-Za-z0-9_-]+$)');


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




    //validate text color - two choices: color keyword + hexadecimal
        //color keyword
        when: (output) => {
            if(output.textColor === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (output) => {
            const color = 'a-z'
            if(!output.match(color)) {
                
            }

        },



        //hexadecimal - using RegEx pattern
        //hexcode contains the alphabets(A-F) and integers(0-9) and is of length 3 or 6.RegExp is used to check whether the alphabets ranging between A and F, integers from 0-9, and is of length = 3 or 6.
        when: (output) => {
            if(output.textColor === 'hexadecimal') {
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
    
   //validate shape color - two choices: color keyword + hexadecimal
        //color keyword

        //hexadecimal

];

module.exports = input;
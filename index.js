const inquirer = require('inquirer');
const fs = require ('fs');
//seperate file for generating shape
const logoShape = required('./lib/shapes/genShape.js');
//seperate file for user input
const input = require('./lib/input.js');


//function to create logo
function lazyLogo(output) {
    const svg = logoShape (output); //generated shape - genShape.js
    fs.writeFile(fileName, svg, (err) => {
    if (err) throw new Error(err);
    console.log('Your SVG Logo Generated! Check it out in the sample folder!');
    });
};

//function to initialize - init()
function hands() {

    //message displayed at start of prompt
    console.log(`
    *********************
    Welcome to LAZY HANDS
    *SVG Logo Generator!*
    *********************
    `);

    //user prompts, logo creation, catch errors
    inquirer
        .prompt(input) //user input
        .then((output) => {
            lazyLogo(output); //svg logo (response)
        })
        .catch(err => {
            console.log(err)
        });
};

hands();
const inquirer = require('inquirer');
const jest = require('jest');

//will apply 'fs' when creating the svg code 
const fs = require ('fs');

//creating a seperate file for user input
const input = require('./lib/input.js');


//function to create logo
function lazyLogo(output) {
    const svg = logo(output); //user response for created logo
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
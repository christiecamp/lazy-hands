const inquirer = require('inquirer');
const fs = require('fs');
const svgPath = "./example/logo.svg";
//seperate file for user input
const input = require('./lib/input.js');
//seperate file for generating shape
const logoShape = require('./lib/shapes/logoShape.js');


//function to create logo
function lazyLogo(output) {
    const svg = logoShape (output); //generated shape - logoShape.js
        fs.writeFile(svgPath, svg, (err) => {
            if (err) throw new Error(err);
                console.log('Your SVG Logo Generated! Check it out in the sample folder!');
        });
        // fs.open(html, (err) => {
        //     if (err) throw new Error(err);
        //         console.log('Your SVG Logo can be viewed in your open browser!');
        // }); 
};

//function to initialize
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
            console.log (output);
            lazyLogo(output); //svg logo (response)
        })
        .catch(err => {
            console.log(err)
        });
};

hands();
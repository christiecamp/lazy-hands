const inquirer = require('inquirer');
const jest = require('jest');

//will apply 'fs' when creating the svg code 
const fs = require ('fs');

//creating a seperate file for user input
const input = require('./lib/input');


//function to create logo
function lazyLogo(output) {};

//function to initialize - init()
function hands() {
    inquirer
    .prompt(input)
    .then((output) => {
        lazyLogo(output);
    })
    .catch(err => {
        console.log(err)
    });
};

hands();
//generating the shape from user input

const Circle = require('./circle');
const Square = require('./square');
const Triangle = require ('./triangle');

//switch case?
//switch expression is evaluated once - the value of the expression is compared with the values of each case.
//if there is a match, the associated block of code is executed - if there is no match, the default code block is executed.

//not sure if the below will generate correctly but keeping in as placeholder

const logoShape = (output) => {
    const{generateShape} = output;
    switch (generateShape) {
        //circle svg
        case "circle":
            const circleLogo = new Circle(output);
            return circleLogo;
            break;
        //square svg
        case "square":
            const squareLogo = new Square(output);
            return squareLogo;
            break;
        //triangle svg
        case "triangle":
            const triangleLogo = new Triangle(output);
            return triangleLogo;
            break;

        default:
            return `ERROR! Please retry again`
    };
};

module.exports = { logoShape } ;
//exporting as an object
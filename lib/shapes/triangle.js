//parent class
const Shape = required('./shapes.js');

//triangle class - child class of Shape
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    //needs to be tested for render()
    //shape may be wrong for triangle - check dimensions after testing
    render(){
        return `
        <svg version="1.1" 
            width="300" height="200" 
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 50 300, 300 0, 300" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Triangle;
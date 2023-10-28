//parent class
const Shape = required('../shapes.js');

//triangle class - child class of Shape
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    //needs to be tested for render()
    render(){
        return
    };
};

module.exports = Triangle;
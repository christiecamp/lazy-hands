//parent class
const Shape = required('../shapes/shapes');

//square class - child class of Shape
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    //needs to be tested for render()
    render(){
        return
    };
};

module.exports = Square;
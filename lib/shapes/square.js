//parent class
const Shape = required('../shapes.js');

//square class - child class of Shape
class Square extends Shape {
    construcctor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    //needs to be tested for render()
    render(){
        
    };
};

module.exports = Square;
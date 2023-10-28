//parent class
const Shape = required('../shapes.js');

//circle class - child class of Shape
class Circle extends Shape {
    construcctor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    //needs to be tested for render()
    render(){
        
    };
};

module.export = Circle;
//parent class for shapes that will extend to children classes (circle, square, triangle)
class Shape {
    //constructor class is used to create the object containing the properties - shapeColor, text, and textColor
    constructor(shapeColor, text, textColor) {
    //pulls in information for:
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    };
};

module.exports = Shape;
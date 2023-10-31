//circle constructor imported
const Circle = require('../shapes/circle');

//test is created to check text, textColor, and shapeColor
describe('Circle', () => {
    it('should return a logo with text, text color, and shape color input determined by the user', () => {
        const circle = new Circle ('Cosmic Sans', 'white', 'pink')
        expect(circle.render()).toContain(
        `<circle cx="150" cy="100" r="80" fill="red"/>`
        );
    });
});
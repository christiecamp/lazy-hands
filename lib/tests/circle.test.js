//circle constructor imported
const Circle = require('../shapes/circle');

//test is created to check shapeColor, text, and textColor
describe('Circle', () => {
    it('should return a logo with shape color, text, and text color input determined by the user', () => {
        const circle = new Circle ('red', 'SVG', 'white');
        expect(circle.render()).toContain( `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
        );
    });
});
//square constructor imported
const Square = require('../shapes/square');

//test is created to check shapeColor, text, and textColor
describe('Square', () => {
    it('should return a logo with shape color, text, text color input determined by the user', () => {
        const square = new Square ('red', 'SVG', 'white')
        expect(square.render()).toContain('<svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg"><rect x="50" y="0" width="200" height="200" r="100" fill="red" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
    });
});
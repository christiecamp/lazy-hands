//circle constructor imported
const Triangle = require('../shapes/triangle');

//test is created to check shapeColor, text, and textColor
describe('Triangle', () => {
    it('should return a logo with shape color, text, and text color input determined by the user', () => {
        const triangle = new Triangle ('red', 'SVG', 'white')
        expect(triangle.render()).toContain('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 50 300, 300 0, 300" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
    });
});
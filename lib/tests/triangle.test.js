//circle constructor imported
const Triangle = require('../shapes/triangle');

//test is created to check text, textColor, and shapeColor
describe('Triangle', () => {
    it('should return a logo with text, text color, and shape color input determined by the user', () => {
        const triangle = new Triangle ('Cosmic Sans', 'white', 'pink')
        expect(triangle.render()).toEqual('');
        //testing render() - toEqual logo?
    });
});
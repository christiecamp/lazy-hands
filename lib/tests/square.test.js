//square constructor imported
const Square = require('../shapes/square');

//test is created to check text, textColor, and shapeColor
describe('Square', () => {
    it('should return a logo with text, text color, and shape color input determined by the user', () => {
        const square = new Square ('Cosmic Sans', 'white', 'pink')
        expect(square.render()).toContain('');
        //testing render() - toEqual logo?
    });
});
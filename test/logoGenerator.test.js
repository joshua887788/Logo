const logoUtils = require('../test/logoUtils.js');
const { generateLogo } = logoUtils;
describe('generateLogo', () => {
  it('should generate a triangle logo with color and characters', () => {
    const shape = 'triangle';
    const color = 'red';
    const textColor = 'blue'; 
    const characters = 'ABC';

    const result = generateLogo(shape, color, textColor, characters);

    expect(result).toContain('<svg');
    expect(result).toContain(`<polygon points`);
    expect(result).toContain(`fill="${color}"`);
    expect(result).toContain(`fill="${textColor}"`); 
    expect(result).toContain(characters);
  });

  it('should generate a square logo with color and characters', () => {
    const shape = 'square';
    const color = 'blue';
    const textColor = 'blue'; 
    const characters = '123';

    const result = generateLogo(shape, color, textColor, characters);

    expect(result).toContain('<svg');
    expect(result).toContain(`<rect`);
    expect(result).toContain(`fill="${color}"`);
    expect(result).toContain(`fill="${textColor}"`); 
    expect(result).toContain(characters);
  });

  it('should generate a circle logo with color and characters', () => {
    const shape = 'circle';
    const color = 'green';
    const textColor = 'blue'; 
    const characters = 'XYZ';

    const result = generateLogo(shape, color, textColor, characters);

    expect(result).toContain('<svg');
    expect(result).toContain(`<circle`);
    expect(result).toContain(`fill="${color}"`);
    expect(result).toContain(`fill="${textColor}"`); 
    expect(result).toContain(characters);
  });

  it('should throw an error for an invalid shape', () => {
    const shape = 'invalid';
    const color = 'invalid';
    const textColor = 'invalid'; 
    const characters = 'invalid';

    expect(() => generateLogo(shape, color, textColor, characters)).toThrowError('Invalid shape');
  });
});


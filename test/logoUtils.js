

module.exports.generateLogo = (shape, color, textColor, characters) => {
  const canvasWidth = 300;
  const canvasHeight = 200;

  let svg = '';

  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  switch (shape) {
      case 'triangle':
        svg = `<svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
          <polygon points="${canvasWidth / 2},${canvasHeight / 10} ${canvasWidth / 10},${(9 * canvasHeight) / 10} ${(9 * canvasWidth) / 10},${(9 * canvasHeight) / 10}" fill="${color}" />
          <text x="${centerX - (characters.length * 5)}" y="${centerY + 10}" font-size="20" fill="${textColor}">${characters}</text>
        </svg>`;
        break;
      case 'square':
        svg = `<svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${canvasWidth}" height="${canvasHeight}" fill="${color}" />
          <text x="${centerX - (characters.length * 5)}" y="${centerY + 10}" font-size="20" fill="${textColor}">${characters}</text>
        </svg>`;
        break;
      case 'circle':
        svg = `<svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${canvasWidth / 2}" cy="${canvasHeight / 2}" r="${Math.min(canvasWidth, canvasHeight) / 3}" fill="${color}" />
          <text x="${centerX - (characters.length * 5)}" y="${centerY + 10}" font-size="20" fill="${textColor}">${characters}</text>
        </svg>`;
        break;
      default:
        throw new Error('Invalid shape');
    }
  
    return svg;
  };
  
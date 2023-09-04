const inquirer = require('inquirer');
const fs = require('fs');
const logoUtils = require ('./test/logoUtils.js');


const questions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for the logo:',
    choices: ['triangle', 'square', 'circle'],
  },
  {
    type: 'input',
    name: 'color',
    message: 'Enter a color for the logo:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a text color for the logo:',
  },
  {
    type: 'input',
    name: 'characters',
    message: 'Enter up to 3 characters for the logo:',
    validate: function (input) {
     
      if (input.length <= 3) {
        return true;
      } else {
        return 'Please enter up to 3 characters.';
      }
    },
  },
];

const generateLogoPrompt = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const { shape, color, textColor, characters } = answers;

    const logo = logoUtils.generateLogo(shape, color, textColor, characters);

    fs.writeFileSync('logo.svg', logo);
    console.log('Logo created and saved as "logo.svg".');
  } catch (error) {
    console.error('Error:', error);
  }
};

generateLogoPrompt();

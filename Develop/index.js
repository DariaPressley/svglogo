const { Square, Triangle, Circle } = require("./shapes");
const inquirer = require("inquirer");
const fs = require ("fs");

inquirer
  .prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want to create?',
        choices: ["circle", "square", "triangle"]
      },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What is the shape color?',
    },
    {
      type: 'input',
      message: 'What is the text color?',
      name: 'textColor',
    },
    {
      type: 'input',
      message: 'What is the text in the logo?',
      name: 'text',
    },
  ])
  .then((data) => {
    let createdShape
    switch(data.shape) {
        case "circle":
        createdShape= new Circle (data.shapeColor, data.textColor, data.text);
        break
        case "square":
        createdShape= new Square (data.shapeColor, data.textColor, data.text);
        break
        case "triangle":
        createdShape= new Triangle (data.shapeColor, data.textColor, data.text);
    }
    fs.writeFile('logo.svg', createdShape.render(), (err) =>
      err ? console.log(err) : console.log('Success!'),
    )
  })
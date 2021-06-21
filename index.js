// TODO: Include packages needed for this application
const markDown = require("./generateMarkdown");
const inquirer = require("inquirer");
const  fs  = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  
{
 type: "input",
 message: "What is the title of your project?",
 name: "title",
},
{
 type: "input",
 message: "write is a short description of your project?",
 name: "description",
},
{
 type: "input",
 message: "what are the installation instructions?",
 name: "installation",
},
{
 type: "input",
 message: "Describe the usage information?",
 name: "usage",
},
{
 type: "input",
 message: "write the contribution guidlines?",
 name: "contribution",
},
{
 type: "input",
 message: "describe the test instructions?",
 name: "test",
},
{
 type: "list",
 message: "what type of liscense would you like?",
 name: "license",
 choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
},
{
 type: "input",
 message: "what is your github Username?",
 name: "username",
},
{
 type: "input",
 message: "what is your email?",
 name: "email",
},
  
];

// TODO: Create a function to write README file
 // fs.appendFile('README.md', `${process.argv[2]}`, (err) =>
 //  err ? console.error(err) : console.log('commit logged!')
// )
function writeToFile(filename, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userResponses) => {
        console.log(userResponses)
        fs.writeFileSync('README.md', markDown(userResponses))
    }

    )  
}

// Function call to initialize app
init();

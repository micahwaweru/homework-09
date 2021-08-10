// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
// TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'titleName',
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'gitHubUN'
    }
])
.then((response)=>{
    console.log(response);
    var titleName = response.titleName;
    console.log(titleName);  
    var gitHubUN = response.gitHubUN;
    
    
    var titleString = `# ${titleName}`;
    
    var readMetext;
    
    
    
    
    
    
    
    
    
    
    
    
    
    fs.writeFile('README.md', readMetext, err=>{
        if(err){
            console.log(err)
            return
        }
    })
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

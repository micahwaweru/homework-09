// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
// TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'gitHubUN'
    }
])
.then((response)=>{
    console.log(response);
    var username = response.username;
    console.log(username);  
    var gitHubUN = response.gitHubUN;
    
    
    
    var readMetext = `# ${username}\n ## GitHub: [https://github.com/${gitHubUN}]\n]`;
    
    
    
    
    
    
    
    
    
    
    
    
    
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

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
        message: 'Give a short description',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'Please proved installation instructions',
        name: 'instlIns'
    },
    {
        type: 'input',
        message: 'Please proved usage information',
        name: 'usageInf'
    },
    {
        type: 'input',
        message: 'Please proved contribution guidlines',
        name: 'contrGuide'
    },
    {
        type: 'input',
        message: 'Please proved test instructions',
        name: 'testIns'
    },
    {
        type: 'rawlist',
        message: 'Please select a license.',
        name: 'license',
        choices: ['GNU', 'MIT']
        
    },
    {
        type: 'input',
        message: 'Please provide your GitHub Username',
        name: 'gitHubUN',
    },
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
    },
])
.then((response)=>{
    console.log(response);
    var titleName = response.titleName;
    console.log(titleName);  
    
    
    
    var titleString = `# ${titleName}\n`;
    var desc = `## Description: \n ${response.desc}\n`;
    var instlIns = ` ## Installation: \n ${response.instlIns}\n`;
    var usageInf = ` ## Usage Information: \n ${response.usageInf}\n`;
    var contrGuide = ` ## Contribution Guidlines \n ${response.contrGuide}\n`;
    var testIns = ` ## Test Instructions \n ${response.testIns}\n`;
    var license = `## License: \n ${license}\n`
    var questions = `## Questions: \n`
    var gitHubUN = `Github: [https://github.com/${response.gitHubUN}]\n`
    var email = `Email:  \n ${response.email}\n`;
    
    
    var readMetext = titleString + desc + instlIns + usageInf + contrGuide + testIns + questions + gitHubUN + email;
    
    
    
    
    
    
    
    
    
    
    
    
    
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

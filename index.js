const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require('./src/page-template');

// const mockData = {
//     Manager {
//       name: 'mike',
//       id: '34',
//       email: 'manager@gmail.com',
//       officeNumber: '8'
//     },
//     Intern {
//       name: 'jolene',
//       id: '37',
//       email: 'internscum@gmail.com',
//       school: 'intern school'
//     },
//     Engineer {
//       name: 'new girl rebekah',
//       id: '98',
//       email: 'engineer@gmail.com',
//       github: 'engineer69'
//     }
//   }

// async function generateHTML(teamData) {
//     console.log(teamData);
//     const pageHTML = generatePage(teamData);

//     fs.writeFile('./dist/index.html', pageHTML, err => {
//         if (err) throw new Error(err);
//         console.log('Page created! Check out index.html in the /dist directory to see it!');
//     });
// };

const promptManager = () => {
    return inquirer.prompt([{
      type: 'input',
      name: 'managerName',
      message: "Please enter the team manager's name. (Required)",
      validate: (managerNameInput) => {
        if (managerNameInput) {
          return true;
        } else {
          console.log("Please enter the name of the team manager!");
        }
      }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Please enter the team manager's id number. (Required)",
        validate: managerIdInput => {
            if (managerIdInput) {
                return true;
            } else {
                console.log('Please enter a valid id number!');
            };
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the team manager's email. (Required)",
        validate: managerEmailInput => {
            if(managerEmailInput.includes('@')){
                return true;
            } else {
                console.log('Please enter a valid email!');
            };
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the team manager's office number. (Required)",
        validate: officeNumberInput => {
            if(officeNumberInput) {
                return true;
            } else {
                console.log('Please enter a valid office number!');
            }
        }
    },
    {
        type: 'list',
        name: 'nextMember',
        message: "Would you like to add another team member or have you finished building your team?",
        choices: ['Intern', 'Engineer', 'Finished Building']
    }
  ])
  .then((answers) => {
    this.manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
    let teamManagerObj = {
        name: this.manager.getName(),
        id: this.manager.getId(),
        email: this.manager.getEmail(),
        
    }
    teamMembers.push();
    if (answers.nextMember === 'Intern'){
        promptIntern();
    } else if (answers.nextMember === 'Engineer') {
        promptEngineer();
    }
    else {
         console.log(teamMembers);
    }
})
};


  const promptEngineer = async () => {
      return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the engineer's name. (Required)",
            validate: engineerNameInput => {
                if(engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid name!");
                };
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Please enter the engineer's id number. (Required)",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Please enter a valid id number!');
                };
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter the engineer's email. (Required)",
            validate: engineerEmailInput => {
                if(engineerEmailInput.includes('@')){
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                };
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username. (Required)",
            validate: githubInput => {
                if(githubInput){
                    return true;
                } else {
                    console.log('Please enter a valid github username!');
                };
            }
        },
        {
            type: 'list',
            name: 'nextMember',
            message: "Would you like to add another team member or have you finished building your team?",
            choices: ['Intern', 'Engineer', 'Finished Building']
        }
      ])
      .then((answers) => {
        this.engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        teamMembers.push(this.engineer);
        if (answers.nextMember === 'Intern'){
            promptIntern();
        } else if (answers.nextMember === 'Engineer') {
            promptEngineer();
        }
        else {
            console.log(teamMembers);
        }
    });
};

const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the intern's name. (Required)",
            validate: internNameInput => {
                if(internNameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid name!");
                };
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "Please enter the intern's id number. (Required)",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log('Please enter a valid id number!');
                };
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter the intern's email. (Required)",
            validate: internEmailInput => {
                if(internEmailInput.includes('@')){
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                };
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the name of the intern's school. (Required)",
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                } else {
                    console.log('Please enter a valid school!');
                };
            }
        },
        {
            type: 'list',
            name: 'nextMember',
            message: "Would you like to add another team member or have you finished building your team?",
            choices: ['Intern', 'Engineer', 'Finished Building']
        }
    ])
    .then((answers) => {
        this.intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        teamMembers.push(this.intern);
        if (answers.nextMember === 'Intern'){
            promptIntern();
        } else if (answers.nextMember === 'Engineer') {
            promptEngineer();
        }
    })
};

[
    Manager {
      name: 'magner',
      id: '897',
      email: '@@gai',
      officeNumber: '9'
    },
    Intern {
      name: 'unrewebn',
      id: '987',
      email: 'enu@@',
      school: 'hsef'
    },
    Engineer {
      name: 'sdhf',
      id: '23',
      email: '@@@mgaui',
      github: 'usidfg'
    }
]

promptManager();



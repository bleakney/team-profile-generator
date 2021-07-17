// const declarations for dependencies and class constructor files
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");

// array to store team member data
const teamMembers = [];

async function generateHTML(teamData) {
  console.log(teamData);
  // async function to transfer data from teamMembers array to page-template.js to create html!
  fs.writeFile("./dist/index.html", generatePage(teamData), (err) => {
    if (err) throw new Error(err);
    console.log(
      "Page created! Check out index.html in the /dist directory to see it!"
    );
  });
}

// manager prompts
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's name. (Required)",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter the name of the team manager!");
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter the team manager's id number. (Required)",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter a valid id number!");
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter the team manager's email. (Required)",
        validate: (managerEmailInput) => {
          if (managerEmailInput.includes("@")) {
            return true;
          } else {
            console.log("Please enter a valid email!");
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the team manager's office number. (Required)",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter a valid office number!");
          }
        },
      },
      {
        type: "list",
        name: "nextMember",
        message:
          "Would you like to add another team member or have you finished building your team?",
        choices: ["Intern", "Engineer", "Finished Building"],
      },
    ])
    .then((answers) => {
      this.manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
      );
      let teamManagerObj = {
        name: this.manager.getName(),
        id: this.manager.getId(),
        email: this.manager.getEmail(),
        otherInfo: this.manager.getOfficeNumber(),
        role: this.manager.getRole(),
      };
      teamMembers.push(teamManagerObj);
      if (answers.nextMember === "Intern") {
        promptIntern();
      } else if (answers.nextMember === "Engineer") {
        promptEngineer();
      } else {
        generateHTML(teamMembers);
      }
    });
};

// engineer prompts
const promptEngineer = async () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the engineer's name. (Required)",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter a valid name!");
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Please enter the engineer's id number. (Required)",
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("Please enter a valid id number!");
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the engineer's email. (Required)",
        validate: (engineerEmailInput) => {
          if (engineerEmailInput.includes("@")) {
            return true;
          } else {
            console.log("Please enter a valid email!");
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the engineer's github username. (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a valid github username!");
          }
        },
      },
      {
        type: "list",
        name: "nextMember",
        message:
          "Would you like to add another team member or have you finished building your team?",
        choices: ["Intern", "Engineer", "Finished Building"],
      },
    ])
    .then((answers) => {
      this.engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.github
      );
      let engineerObj = {
        name: this.engineer.getName(),
        id: this.engineer.getId(),
        email: this.engineer.getEmail(),
        otherInfo: this.engineer.getGithub(),
        role: this.engineer.getRole(),
      };
      teamMembers.push(engineerObj);
      if (answers.nextMember === "Intern") {
        promptIntern();
      } else if (answers.nextMember === "Engineer") {
        promptEngineer();
      } else {
        generateHTML(teamMembers);
      }
    });
};

// intern prompts 
const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name. (Required)",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter a valid name!");
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter the intern's id number. (Required)",
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log("Please enter a valid id number!");
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please enter the intern's email. (Required)",
        validate: (internEmailInput) => {
          if (internEmailInput.includes("@")) {
            return true;
          } else {
            console.log("Please enter a valid email!");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the name of the intern's school. (Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter a valid school!");
          }
        },
      },
      {
        type: "list",
        name: "nextMember",
        message:
          "Would you like to add another team member or have you finished building your team?",
        choices: ["Intern", "Engineer", "Finished Building"],
      },
    ])
    .then((answers) => {
      this.intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.school
      );
      let internObj = {
        name: this.intern.getName(),
        id: this.intern.getId(),
        email: this.intern.getEmail(),
        otherInfo: this.intern.getSchool(),
        role: this.intern.getRole(),
      };
      teamMembers.push(internObj);
      if (answers.nextMember === "Intern") {
        promptIntern();
      } else if (answers.nextMember === "Engineer") {
        promptEngineer();
      } else {
        generateHTML(teamMembers);
      }
    });
};

// function call to execute all code (promptmanager() starts with manager prompts then directs user to prompts for engineers and interns as subject to user needs and inputs)
promptManager();

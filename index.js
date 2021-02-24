// Define all the packages and modules required for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager');

// Define array for all employees working in the team
const employees = [];

// DECLARE FUNCTIONS BELOW:

// Declare funtion to initialise the application and add employees to the app page
function initialiseApp() {
    // Call function to start the HTML page
    startHTML();
    // Call funtion to add employees to the page
    addEmployee();
}

// Declare function to add employees to the array
function addEmployee() {

    // Prompt questions to user in terminal for the name, id and email of the employee
    inquirer.prompt([
        {
            // Propmpt for employee name
            message: "Enter the name of the team member:",
            name: "name"
        },
        {
            // Prompt for employee role
            type: "list",
            message: "Select the team member's role:",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"]
        },
        {
            // Prompt for employee id
            message: "Enter the team member's ID:",
            name: "ID"
        },
        {
            // Prompt for employee email
            message: "Enter the team member's E-mail address:",
            name: "e-mail"
        }
    ]).then(function ({ name, role, id, email }) {

        // Role is different, therefore, role information is differnt
        // Define different role information for each role (Engineer, Intern, or Manager)
        var roleInformation = "";
        if (role === "Engineer") {
            roleInformation = "Github username";
        }
        else if (role === "Intern") {
            roleInformation = "school name";
        }
        else if (role === "Manager") {
            roleInformation = "office phone number";
        }

        // Continue prompting questions in terminal
        inquirer.prompt([
            {
                // Prompt for employee role
                message: `Enter the team member's ${roleInformation}:`,
                name: "roleInformation"
            },
            {
                // Prompt for adding more employees
                type: "list",
                message: "Would you like to add more team members?",
                name: "addMembers",
                choices: ["Yes", "No"]
            }
        ]).then(function ({ roleInformation, addMembers }) {

            // Role is different, therefore, role information being different also applies to new employees,
            // Depending on their role
            var newMember = "";
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInformation);
            }
            else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInformation);
            }
            else if (role === "Manager") {
                newMember = new Manager(name, id, email, roleInformation);
            }

            // Add new member into the employees array and to HTML
            employees.push(newMember);
            addHtml(newMember).then(function () {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            })
        })
    })
}

// Declare function to start rendering of the HTML page
function startHTML() {

}

// Declare function to add HTML content to the page
function addHTML() {

}

// Declare function to end HTML rendering
function endHTML() {

}

// Call function to initialise app
initialiseApp();
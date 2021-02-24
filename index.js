// Define all the packages and modules required for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Employee = require('./library/Employee');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager');

// Log out any necessities to check for errors in terminal
console.log("Hi, I'm starting up my assignment.");
console.log(typeof (inquirer), typeof (jest), typeof (fs));
console.log(typeof Employee, typeof Engineer, typeof Intern, typeof Manager);

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
            // Prompt for employee ID
            message: "Enter the ID of the team member:",
            name: "ID"
        },
        {
            // Prompt for employee e-mail
            message: "Enter the e-mail address of the team member:",
            name: "e-mail"
        }
    ]).then(function(name, role, id, email) {

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
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
console.log(typeof inquirer, typeof jest, typeof fs);
console.log(typeof Employee, typeof Engineer, typeof Intern, typeof Manager);

// Define array for all employees working in the team
const employees = [];

// DECLARE FUNCTIONS BELOW:

// Declare funtion to initiate the application and add employees to the app page
function initialiseApp () {
    // Call function to start the HTML page
    startHTML();
    // Call funtion to add employees to the page
    addEmployees();
}

// Declare function to add employees to the array
function addEmployees() {

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
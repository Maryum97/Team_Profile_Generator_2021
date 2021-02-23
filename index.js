// Define all the packages and modules required for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Employee = require('./tests/Employee.test');
const Engineer = require('./tests/Engineer.test');
const Intern = require('./tests/Intern.test');
const Manager = require('./tests/Manager.test');

// Log out any necessities to check for errors in terminal
console.log("Hi, I'm starting up my assignment.");
console.log(typeof Employee);
console.log(typeof Engineer);
console.log(typeof Intern);
console.log(typeof Manager);
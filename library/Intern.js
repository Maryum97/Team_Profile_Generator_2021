// Module required for this file
// Because the extension for Engineer is Employee
const Employee = require("./Employee");

// Define the constructor class "Intern"
class Intern extends Employee {
    constructor(name, id, email, school) {

        // Calling properties defined in parent object (Employee)
        super(name, id, email);

        // Defining new property --> first test
        this.school = school;
    }

    // Declare the functions described in the test file

    getRole() {
        return "Intern";
    }

    getGithub() {
        return this.school;
    }
}

// Make module available for export
module.exports = Intern;
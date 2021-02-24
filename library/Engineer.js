// Module required for this file
// Because the extension for Engineer is Employee
const Employee = require("./Employee");

// Define the constructor class "Engineer"
class Engineer extends Employee {
    constructor(name, id, email, github) {

        // Calling methods defined in parent object (Employee)
        super(name, id, email)

        // Defining new method --> first test
        this.github = github;
    }

    // Declare the functions described in the test file

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

// Make module available for export
module.exports = Engineer;
// Module required for this file
// Because the extension for Engineer is Employee
const Employee = require("./Employee");

// Define the constructor class "Manager"
class Manager extends Employee {
    constructor(name, id, email, office) {

        // Calling properties defined in parent object (Employee)
        super(name, id, email);

        // Defining new property --> first test
        this.office = office;
    }

    // Declare the functions described in the test file

    getRole() {
        return "Manager";
    }

    getGithub() {
        return this.office;
    }
}

// Make module available for export
module.exports = Manager;
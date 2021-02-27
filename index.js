// Define all the packages and modules required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager');

// Define array for all employees working in the team
const employees = [];

// DECLARE FUNCTIONS BELOW:

// Declare funtion to initiate the application and add employees to the app page
function initiateApp() {
    // Call function to start the HTML page
    startHTML();
    // Call funtion to add employees to the page
    addEmployee();
}

// Declare function to add employees to the array
function addEmployee() {

    // Define function for if a manager already exists in the array

    const myArray = ["Engineer", "Intern"];

    const managerExists = async (response) => {
        if (response !== "Manager") {
            return true;
        }
        else {
            for (var i = 0; i < employees.length; i++) {
                if (employees[i].role == "Manager") {
                    found = true;
                    console.log("returning error");
                    return "There is already one manager in the team.";
                }
            }
        }
    }

    if (managerExists()) {
        myArray.push("Manager");
    }

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
            choices: myArray
        },
        {
            // Prompt for employee id
            message: "Enter the team member's ID:",
            name: "id"
        },
        {
            // Prompt for employee email
            message: "Enter the team member's E-mail address:",
            name: "email"
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
            addHTML(newMember).then(function () {
                if (addMembers === "Yes") {
                    addEmployee();
                }
                else {
                    endHTML();
                }
            })
        })
    })
}

// Declare function to create HTML page
function startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only, from Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <!-- CSS only, from Font Awesome -->
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    
        <!-- Navbar here -->
        <nav class="navbar navbar-expand-lg navbar-light bg-danger">
            <div class="container-fluid">
                <div class="container py-4">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="bg-danger">
                                <h1 class="text-center text-white">My Team</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    
        <!-- Container for body here -->
        <div class="container">
    
            <div class="row">`;

    fs.writeFile("./result-HTML/my-team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    })
    console.log("start");

}

// Declare function to append content to HTML page
function addHTML(teamMember) {
    return new Promise(function (resolve, reject) {
        const name = teamMember.getName();
        const role = teamMember.getRole();
        const id = teamMember.getId();
        const email = teamMember.getEmail();

        // Define the information for each employee type, to append as a card in the HTML page
        let infoCard = "";

        if (role === "Engineer") {
            const github = teamMember.getGithub();
            infoCard = `<div class="col-4">
            <!-- Card here -->
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-center text-light bg-primary py-4">${name}<br>
                        <span>
                            <h3><i class="fas fa-glasses-alt"></i> Engineer</h3>
                        </span>
                    </h2>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                    </ul>
                </div>
            </div>
            </div>`;
        }

        else if (role === "Intern") {
            const school = teamMember.getSchoolName();
            infoCard = `<div class="col-4">
            <!-- Card here -->
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-center text-light bg-primary py-4">${name}<br>
                        <span>
                            <h3><i class="fas fa-user-hard-hat"></i> Intern</h3>
                        </span>
                    </h2>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>
        </div>`;

        }

        else if (role === "Manager") {
            const office = teamMember.getOfficeNum();
            infoCard = `<div class="col-4">
            <!-- Card here -->
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-center text-light bg-primary py-4">${name}<br>
                        <span>
                            <h3><i class="fad fa-mug-hot"></i> Manager</h3>
                        </span>
                    </h2>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Office Number: ${office}</li>
                    </ul>
                </div>
            </div>
        </div>`;
        }

        console.log("adding team member");
        fs.appendFile("./result-HTML/my-team.html", infoCard, function (err) {
            if (err) {
                return reject(err);
            }

            return resolve();
        })
    })
}

// Declare function to add finishing touches to HTML page, including error logging
function endHTML() {
    const html = `</div>
    </div>
</body>
</html>`;

    fs.appendFile("./result-HTML/my-team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    })
    console.log("end");

}

// Call function to initiate app
initiateApp();
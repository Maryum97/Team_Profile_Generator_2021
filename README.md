
<h1 style="align: center;">Team Profile Generator 👋</h1>

## Description
🔍 Welcome to my homework repository, which I have generated under the guidance and acceptance criteria of the University of Birmingam! This repository contains the application designed for generating a HTML webpage for an organisation that wishes to keep record of all their employees, hence, the name "Team Profile Generator". This application uses Node.js to add team members and thier information to the organisation webpage, to appear in the browser. The owner of this application may add as many team members onto the webpage as they desire, depending on how many employees work at the organisation, including managers, engineers, and interns. This application makes it very convenient for team managers and organisers to keep track of all the members in their team, along with their credentials and other necessary information.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Instructions](#instructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## Installation
💾 In order to install this app, the user must have access to all the necessary software applications and modules installed/created on their machines, including the following: 
- Node.js 
- package.json 
- fs 
- inquirer 
- All files in the './library' directory. 

## Instructions
⚙️ After installing/creating all the necessary modules, the user must start the application by opening the local terminal and typing "node index.js". Then, the user will be prompted with a series of prompts, to which the user must respond with appropriate answers. The server prompts the user with questions confirming the following properties:

1. Employee's name
2. Employee's role/profession:
    a. Manager
    b. Engineer
    c. Intern
3. Employee ID
4. Email address
5. The following, depending upon the role:
    a. Office phone number, if manager
    b. Github account, if engineer
    c. School name, if intern

The demo gif below demostrates the formation of the html webpage once the user finishes answering appropriately to the prompts in the server:

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/73832871/109430502-abbc6400-79f9-11eb-9cd2-1011fa222160.gif)

The special advantage of using this app is that it allows the team organiser or user to add as many team members as they wish, including if the team requires multiple managers. At the end, the team is displayed on a html page, an example of which is shown in the image below:

![Annotation 2021-02-28 171305](https://user-images.githubusercontent.com/73832871/109430499-a95a0a00-79f9-11eb-962b-792156ef6875.png)

Another special feature about this app is that it allows the user to access the Github accounts and the email addresses of the team members, because they are included in the code as hyperlinks.

## Usage
💻 Watch the video linked below:

#video#

## License
![badge](https://img.shields.io/badge/license-MIT License-brightgreen)
<br />
This application is covered by the MIT License. 

## Contributing
👪 If you would like to contribute to my code in this repository, contact me using the contact information below, whereby I may be able to provide you with access to my code, by allowing you to create branches and push any changes that I may merge!

## Tests
✏️ I have used the following procedure to test and validate my code:

- I created test files for each of the script (.js) files that I used to test my functions to make sure they passed
- I installed jest in my local machine through Node.js, in order for Node to allow me to carry out the tests
- I ran "npm run test" in Node and read all of my tests in the server as "passed"

You may have a look at my test files in the "tests" directory of my repository. Each of them use the 'require()' method to call the actual js files respective to their names and functions. I have demonstrated the test running in my video, in the "Usage" section. Below is a gif demonstrating the tests being passed:

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/73832871/109430885-66993180-79fb-11eb-9f07-09d47044c8ab.gif)

## Credits
💐 I would like to credit the following sources for helping me finish my assignment:
1. StackOverflow
2. W3Schools
3. YouTube.com
4. AskBCS
5. The private tutoring facility at UOB

## Questions
✋ If you have any questions, contact me using the details below:<br />
<br />
:octocat: Find me on GitHub: [Maryum97](https://github.com/Maryum97)<br />
<br />
✉️ Email me with any questions: maryumbokhari97@gmail.com<br /><br />

_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
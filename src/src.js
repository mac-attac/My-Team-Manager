const { prompt } = require("inquirer");
// const validator = require("email-validator");
const { Manager, Engineer, Intern } = require("../lib/classes");
// const cardGenerator = require("../index");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const allEmployees = [];

function createManager() {
  prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
    },
  ]).then((answers) => {
    let manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    allEmployees.push(manager);

    nextEmployee();
  });
}

function createIntern() {
  prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
      // validate: validator,
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
    },
  ]).then((answers) => {
    let intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );

    allEmployees.push(intern);

    nextEmployee();
  });
}

function createEngineer() {
  prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
      // validate: validator.validate("email"),
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub name?",
    },
  ]).then((answers) => {
    let engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );

    allEmployees.push(engineer);

    nextEmployee();
  });
}

function nextEmployee() {
  prompt([
    {
      type: "list",
      message: "Would you like to add another employee?",
      choices: ["Engineer", "Intern", "I'm all finished!"],
      name: "choices",
    },
  ]).then((answers) => {
    if (answers.choices === "Engineer") {
      createEngineer();
    } else if (answers.choices === "Intern") {
      createIntern();
    } else {
      allDone();
    }
  });
}

function allDone() {
  fs.writeFile(outputPath, cardGenerator(allEmployees), (err) => {
    if (err) throw err;
    console.log("Success!");
  });
}

function cardGenerator(arr) {
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (getRole() === "Engineer") {
      return html.push(engineerCard());
    } else if (getRole() === "Manager") {
      return html.push(managerCard());
    } else {
      return html.push(internCard());
    }
  }

  return (
    html +
    `</div>
          </div>
      </div>
  </body>
  </html>`
  );
}

createManager();

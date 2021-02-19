const inquirer = require('inquirer')
const validator = require('email-validator')
const { Manager, Engineer, Intern } = require('./lib/classes.js')
const cardGenerator = require('./index.js')
const fs = require('fs')
const path = require ('path')
const { prompt } = require('inquirer')
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const allEmployees = []

//createmanager fn - use inquirer
    //whenever new employee is created push to allEmployees
function createManager() {
    prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email?",
        validate:
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
      },
    ]);
}
//createintern fn "
function createIntern() {

}
//createengineer fn "

function createEngineer() {

}

function nextEmployee() {

}
//function for what employee do you want to create next, then call one of the above functions - use inquirer
    // what do you want to do next? make e,m or i or are you done? call done function if done

function allDone() {

}
// "im done" function that calls function that generates the html
    //going to look pretty similar to last fn in readme generator
    //fs.writefile(outputPath, cardGenerator(allEmployees), (err) => {if (err) throw err; console.log(Success!)}) 
    //const OUTPUT_DIR = path.resolve(__dirname, "output")
    //const outputPath = path.join(OUTPUT_DIR, "team.html");
    //




//inquirer prompts with corresponding questions.


    prompt([
            //insert questions here for each class of employee
    ])

const src = require("./src/src");

//code to run init for inquirer and then write to html in output file

function cardGenerator(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (getRole() === "Engineer") {
      return html.push(engineerCard());
    } else if (getRole() === "Manager") {
      return html.push(managerCard());
    } else {
      return html.push(internCard());
    }
  }

  return html + "</body></html>";
}
//first function take in an array of employees and determine which card needs to be generated
//by the end of the function return html variable with closing tags on them
//use return html + "</body> </html>"

// normal for loop
//if getRole() ==="engineer" then call engineerCard()

//engineerCard()
//inside will return template literal with html for card
//internCard()
//managerCard()

let html = ``;

module.exports = cardGenerator;

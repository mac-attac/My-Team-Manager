const src = require("./src/src");
const { Manager, Engineer, Intern } = require("./lib/classes");

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

  return (
    html +
    `</div>
          </div>
      </div>
  </body>
  </html>`
  );
}

function engineerCard() {
  return `<div class="card border-primary mb-3" style="max-width: 18rem;">
                <div class="card-header text-white bg-primary">${this.name}</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">${this.id}</h5>
                    <h5 class="card-title"><a href="mailto:${this.email}">${this.email}</a></h5>
                    <h5 class="card-title"><a href="https://www.github.com/${this.github}">${this.github}</a></h5>
                </div>
            </div>`;
}

function internCard() {
  return `<div class="card border-primary mb-3" style="max-width: 18rem;">
                <div class="card-header text-white bg-primary">${this.name}</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">${this.id}</h5>
                    <h5 class="card-title"><a href="mailto:${this.email}">${this.email}</a></h5>
                    <h5 class="card-title">${this.school}</h5>
                </div>
            </div>`;
}

function managerCard() {
  return `<div class="card border-primary mb-3" style="max-width: 18rem;">
                <div class="card-header text-white bg-primary">${this.name}</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">${this.id}</h5>
                    <h5 class="card-title"><a href="mailto:${this.email}">${this.email}</a></h5>
                    <h5 class="card-title">${this.officeNumber}</h5>
                </div>
            </div>`;
}

let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="../output/style.css">

    <title>My Team</title>
</head>
<body>
    <!-- As a link -->
    <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Team!</a>
        </div>
    </nav>
    
    <!-- As a heading -->
    <nav class="navbar navbar-custom">
    </nav>

    <div class="container">
        <div class="row">
            <div class="col-2">`;

module.exports = cardGenerator;

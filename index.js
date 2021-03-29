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
        <div class="row">`;

function cardGenerator(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].getRole() === "Engineer") {
      engineerCard(arr[i]);
    } else if (arr[i].getRole() === "Manager") {
      managerCard(arr[i]);
    } else {
      internCard(arr[i]);
    }
  }

  return (html += `</div>
          </div>
      </div>
  </body>
  </html>`);
}

function engineerCard(engineer) {
  return (html += `
          <div class="col-4">
            <div class="card border-primary mb-3" style="max-width: 18rem;">
              <div class="card-header text-white bg-primary">${engineer.name}
                <div class="card-body bg-white text-primary">
                  <h5 class="card-title">ID: ${engineer.id}</h5>
                  <h5 class="card-title"><a href="mailto:${engineer.email}">Email: ${engineer.email}</a></h5>
                  <h5 class="card-title"><a href="https://www.github.com/${engineer.github}">GitHub Username: ${engineer.github}</a></h5>
                </div>
              </div>
            </div>
          </div>
      `);
}

function internCard(intern) {
  return (html += `
          <div class="col-4">
            <div class="card border-primary mb-3" style="max-width: 18rem;">
              <div class="card-header text-white bg-primary">${intern.name}
                <div class="card-body bg-white text-primary">
                  <h5 class="card-title">ID: ${intern.id}</h5>
                  <h5 class="card-title"><a href="mailto:${intern.email}">Email: ${intern.email}</a></h5>
                  <h5 class="card-title">School: ${intern.school}</h5>
                </div>
              </div>
            </div>
          </div>
`);
}

function managerCard(manager) {
  return (html += `
          <div class="col-4">
            <div class="card border-primary mb-3" style="max-width: 18rem;">
              <div class="card-header text-white bg-primary">${manager.name}
                <div class="card-body bg-white text-primary">
                  <h5 class="card-title">ID: ${manager.id}</h5>
                  <h5 class="card-title"><a href="mailto:${manager.email}">Email: ${manager.email}</a></h5>
                  <h5 class="card-title">Office Number: ${manager.officeNumber}</h5>
                </div>
              </div>
            </div>
          </div>`);
}

module.exports = { cardGenerator };

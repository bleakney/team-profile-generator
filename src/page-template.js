const generateProfile = function(teamDataObject) {
    if(!teamDataObject) {
        return '';
    } else if (teamDataObject.role === 'Manager') {
        return `
              <!-- EMPLOYEE CARD -->
              <div class="col-3">
                <div class="card" style="width: 18rem">
                  <div class="card-header">${teamDataObject.role}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${teamDataObject.name}</li>
                    <li class="list-group-item">ID Number: ${teamDataObject.id}</li>
                    <li class="list-group-item">Email Address: ${teamDataObject.email}</li>
                    <li class="list-group-item">Office Number: ${teamDataObject.otherInfo}</li>
                  </ul>
                </div>
              </div>
            `
    } else if (teamDataObject.role === 'Engineer') {
        return `
              <!-- EMPLOYEE CARD -->
              <div class="col-3">
                <div class="card" style="width: 18rem">
                  <div class="card-header">${teamDataObject.role}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${teamDataObject.name}</li>
                    <li class="list-group-item">ID Number: ${teamDataObject.id}</li>
                    <li class="list-group-item">Email Address: ${teamDataObject.email}</li>
                    <li class="list-group-item">Github: <a href="http://github.com/${teamDataObject.otherInfo}">${teamDataObject.otherInfo}</a></li>
                  </ul>
                </div>
              </div>
            `
    }
    else if (teamDataObject.role === 'Intern') {
        return `
              <!-- EMPLOYEE CARD -->
              <div class="col-3">
                <div class="card" style="width: 18rem">
                  <div class="card-header">${teamDataObject.role}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${teamDataObject.name}</li>
                    <li class="list-group-item">ID Number: ${teamDataObject.id}</li>
                    <li class="list-group-item">Email Address: ${teamDataObject.email}</li>
                    <li class="list-group-item">School: ${teamDataObject.otherInfo}</li>
                  </ul>
                </div>
              </div>
            `
    }
    };

module.exports = templateData => {
    console.log('inside generatePage');
    console.log(templateData);
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link href="style.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Castoro&display=swap"
      rel="stylesheet"
    />

    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <h1>Team Profile</h1>
    </header>
    <main>
      <div class="container">
        <!-- TOP ROW CONTAINER -->
        <div class="row topRowContainer">
        ${generateProfile(templateData[0])}
        ${generateProfile(templateData[1])}
        ${generateProfile(templateData[2])}
        </div>
        <!-- BOTTOM ROW CONTAINER -->
        <div class="row">
        ${generateProfile(templateData[3])}
        ${generateProfile(templateData[4])}
        ${generateProfile(templateData[5])}
        </div>
      </div>
    </main>
  </body>
</html>
        `;
}
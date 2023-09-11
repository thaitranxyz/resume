const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const input = document.getElementById("input");
const body = document.getElementsByTagName("body")[0];
var commandList = [
  "help",
  "show resume",
  "show experience",
  "show skills",
  "show contact",
];

var gettingStarted = `Type available commands to view content of this page. <br/> Available commands: <br/>`;

function commandInit() {
  commandList.forEach((element) => {
    gettingStarted += "- " + element + "<br/>";
  });

  return gettingStarted;
}

var menu = commandInit();

output.innerHTML = gettingStarted;

// printCommand();

// var menu = `Available commands: <br> - help<br> - show resume<br> - show experience<br> - show skills<br>`;
terminal.scrollTop = terminal.scrollHeight;

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const command = input.value;
    input.value = "";

    // Process the command
    const result = processCommand(command);

    // Display the result in the terminal
    output.innerHTML += `<p>${result}</p>`;
    terminal.scrollTop = terminal.scrollHeight;
  }
});

terminal.addEventListener("click", function () {
  input.focus();
});
body.addEventListener("click", function () {
  input.focus();
});

function processCommand(command) {
  // var menu = `Available commands: <br> - help<br> - show resume<br> - show experience<br> - show skills<br>`;
  command = command.trim();
  command = command.toLowerCase();
  console.log(command);
  var name = `thaitran@127.0.0.1:~$ ${command} <br/>`;
  // Replace this with your own command processing logic
  if (command === "help") {
    return menu;
  } else if (command === "show resume" || command === "sh resume") {
    return `
    ${name}
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <title>Thai Tran - Resume</title>
      </head>
      <body>
        <header>
          <h1>Thai Tran</h1>
            GitHub:
            <a href="https://github.com/thaitranxyz" target="_blank"
              >https://github.com/thaitranxyz</a
            >
          </p>
        </header>
    
        <section id="introduction"> 
          <h2>Introduction</h2>
          <p>
            Motivated IT professional with a Bachelor's degree in IT, passionate
            about leveraging technology to drive positive change in organizations.
            Proficient in C# and .NET development, web application development, and
            SQL databases.
          </p>
        </section>
    
        <section id="experience">
          <h2>Experience</h2>
    
          <article>
            <h3>IPsupply - IT Technician</h3>
            <p>February 2023 - Present</p>
            <ul>
              <li>
                Verified incoming shipments, reconciled quantities against purchase
                orders, and maintained accurate inventory records.
              </li>
              <li>
                Contributed to the development and implementation of warehouse
                organization techniques, enhancing overall efficiency.
              </li>
            </ul>
          </article>
    
          <article>
            <h3>Link Group - Developer Programmer</h3>
            <p>February 2022 - November 2022</p>
            <ul>
              <li>
                Produced high-volume personalized documents for clients using C# and
                Quadient Inspire Designer.
              </li>
              <li>
                Automated manual tasks with efficient scripts, improving workflow.
              </li>
              <li>
                Provided quality assurance, offering valuable feedback for design
                and data errors, and resolved bottlenecks for a more efficient
                process.
              </li>
            </ul>
          </article>
    
          <article>
            <h3>TechBank Group - Software Developer Intern</h3>
            <p>October 2020 - April 2021</p>
            <ul>
              <li>
                Assisted in maintaining CRM and ERP applications, addressing issues
                and implementing improvements.
              </li>
              <li>
                Gained experience in web application development, API creation, and
                SQL database management.
              </li>
            </ul>
          </article>
        </section>
    
        <section id="projects">
          <h2>Personal Projects</h2>
          <ul>
            <li>
              Dating App (C#, ASP.NET, Angular) - Developed a web application using
              C# and Angular, emphasizing Dependency Injection and MVC architecture.
            </li>
          </ul>
        </section>
    
        <section id="education">
          <h2>Education</h2>
          <p>University of Technology Sydney</p>
          <p>Bachelor’s Degree in IT</p>
          <ul>
            <li>
              Specialized in Enterprise System Development and Network Security.
            </li>
          </ul>
        </section>
    
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: C#, JavaScript, Python</li>
            <li>Web Technologies: HTML, CSS, ASP.NET, Entity Framework Core</li>
            <li>Database: MySQL, MS SQL</li>
            <li>Tools: Postman, Proxmox, VM</li>
            <li>Web Hosting: Nginx, Linux</li>
          </ul>
        </section>
      </body>
    </html>
    
        `;
  } else if (
    command === "show experience" ||
    command === "sh experience" ||
    command === "sh exp"
  ) {
    return ` ${name} <section id="experience">
    <h2>Experience</h2>

    <article>
      <h3>IPsupply - IT Technician</h3>
      <p>February 2023 - Present</p>
      <ul>
        <li>
          Verified incoming shipments, reconciled quantities against purchase
          orders, and maintained accurate inventory records.
        </li>
        <li>
          Contributed to the development and implementation of warehouse
          organization techniques, enhancing overall efficiency.
        </li>
      </ul>
    </article>

    <article>
      <h3>Link Group - Developer Programmer</h3>
      <p>February 2022 - November 2022</p>
      <ul>
        <li>
          Produced high-volume personalized documents for clients using C# and
          Quadient Inspire Designer.
        </li>
        <li>
          Automated manual tasks with efficient scripts, improving workflow.
        </li>
        <li>
          Provided quality assurance, offering valuable feedback for design
          and data errors, and resolved bottlenecks for a more efficient
          process.
        </li>
      </ul>
    </article>

    <article>
      <h3>TechBank Group - Software Developer Intern</h3>
      <p>October 2020 - April 2021</p>
      <ul>
        <li>
          Assisted in maintaining CRM and ERP applications, addressing issues
          and implementing improvements.
        </li>
        <li>
          Gained experience in web application development, API creation, and
          SQL database management.
        </li>
      </ul>
    </article>
  </section>`;
  } else if (
    command === "show skills" ||
    command === "show skill" ||
    command === "sh skills" ||
    command === "sh skill"
  ) {
    return ` ${name} <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>Programming Languages: C#, JavaScript, Python</li>
      <li>Web Technologies: HTML, CSS, ASP.NET, Entity Framework Core</li>
      <li>Database: MySQL, MS SQL</li>
      <li>Tools: Postman, Proxmox, VM</li>
      <li>Web Hosting: Nginx, Linux</li>
    </ul>
  </section>`;
  } else if (command === "show contact" || command === "sh contact") {
    return `${name}<p>
    Sorry this is not available at the moment`;
  } else if (command === "open youtube") {
    window.open("https://youtube.com/", "_blank");
    return `${name}starting youtube`;
  } else if (command === "clear") {
    output.innerHTML = "";
    return "";
  } else {
    return `${name}<br/>Command not recognized: ${command} ${menu}`;
  }
}

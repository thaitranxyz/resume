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
var contact = `<p>
Email:
<a href="mailto:thai.d.t.tran@gmail.com">thai.d.t.tran@gmail.com</a>
</p>`;

var header = `<h1>Thai Tran</h1>
<div class="contact-info">
  <p>
    Email:
    <a href="mailto:thai.d.t.tran@gmail.com">thai.d.t.tran@gmail.com</a>
  </p>
  <p>
    GitHub:
    <a href="https://github.com/thaitranxyz"
      >https://github.com/thaitranxyz</a
    >
  </p>
  <p>
    Portfolio:
    <a href="https://latte1sugar.xyz/">https://latte1sugar.xyz/</a>
  </p>
</div>`;

var experience = `<div class="section">
<h2>Experience:</h2>
<p>
  <strong>IPsupply - IT Technician</strong><br />February 2023 - Present
</p>
<ul>
  <li>
    Reduced time taken by implementing various C# scripts to help with
    manual computing tasks.
  </li>
  <li>Assisted in warehouse management, inventory management.</li>
  <li>
    Provided technical support to warehouse staff for hardware and
    software-related issues.
  </li>
</ul>
<p>
  <strong>Link Group - Developer Programmer</strong><br />February 2022 -
  November 2022
</p>
<ul>
  <li>
    Produced high-volume personalized documents for clients using C# and
    Quadient Inspire Designer.
  </li>
  <li>
    Automated manual tasks with efficient scripts, improving workflow.
  </li>
  <li>
    Provided quality assurance, offering valuable feedback for design and
    data errors, and resolved bottlenecks for a more efficient process.
  </li>
</ul>
<p>
  <strong>TechBank Group - Software Developer Intern</strong><br />October
  2020 - April 2021
</p>
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
</div>`;

var project = `<div class="section">
<h2>Personal Projects:</h2>
<p><strong>Dating App (C#, ASP.NET, Angular)</strong></p>
<p>
  Developed a web application using C# and Angular, emphasizing Dependency
  Injection and MVC architecture.
</p>
<p><strong>Job Insight (C#, ASP.NET Web API, Razor Page)</strong></p>
<p>
  I am building this to track my job application. It is a fun project and
  a place where I can experiment with different programming techniques.
</p>
<p>I am using ASP.NET Web API and Razor Page for this project.</p>
<p><strong>Digital Resume (HTML, CSS, JavaScript)</strong></p>
<p>
  A terminal-like interface where you can type in commands and it will
  return my resume and other things about myself. It is hosted on
  <a href="https://latte1sugar.xyz">https://latte1sugar.xyz</a>.
</p>
</div>
<div class="section">
<h2>Education:</h2>
<p>
  <strong>University of Technology Sydney</strong><br />Bachelor’s Degree
  in IT<br />Specialized in Enterprise System Development and Network
  Security.
</p>
</div>`;

var skills = `<div class="section">
<h2>Skills:</h2>
<p>
  C#, ASP.NET MVC, ASP.NET Core Web API, JavaScript, Python, Angular,
  HTML, CSS, Nginx, MySQL, SQL Server, Linux, Nginx, Proxmox, Git,
  DBeaver, Cisco, Networking, Quadient, Photoshop.
</p>
</div>`;

var resume = header + experience + project + skills;

var gettingStarted = `TYPE available commands and ENTER to view content of this page. <br/> Available commands: <br/>`;

function commandInit() {
  commandList.forEach((element) => {
    gettingStarted += "- " + element + "<br/>";
  });

  return gettingStarted;
}

var menu = commandInit();

output.innerHTML = gettingStarted;

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
    return `${name} ${resume}`;
  } else if (
    command === "show experience" ||
    command === "sh experience" ||
    command === "sh exp"
  ) {
    return ` ${name} ${experience}`;
  } else if (
    command === "show skills" ||
    command === "show skill" ||
    command === "sh skills" ||
    command === "sh skill"
  ) {
    return ` ${name} ${skills}`;
  } else if (command === "show contact" || command === "sh contact") {
    return `${name} ${contact}`;
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

const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const input = document.getElementById("input");
const body = document.getElementsByTagName("body")[0];
var commandList = [
  "help",
  "show resume",
  "show experience",
  "show skills",
  "show education",
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

var summary = `<div class="section">
<h2>Summary</h2>
<p>
    - Junior developer experiences in C#, JavaScript, SQL, and many other technologies.<br>
    - Solid understanding of programming design principles, web technologies, database development.<br>
    - Understand and follow good software development practices.<br>
    - Enthusiast in developing technical and non-technical solutions to problems.
</p>
</div>`;

var experience = ` <div class="section">
<h2>Experience</h2>
<h3>IPsupply - IT Technician</h3>
<p>February 2023</p>
<ul>
    <li>Reduced time taken by implementing scripts, mainly written in C#, to help with manual computing tasks.</li>
    <li>Assisted in warehouse management, inventory management.</li>
    <li>Provided technical support for hardware and software-related issues.</li>
    <li>Ensured orders are shipped before deadlines.</li>
</ul>

<h3>Link Group - Developer Programmer</h3>
<p>February 2022</p>
<ul>
    <li>Produced high-volume personalized documents for clients using C# and Quadient Inspire Designer.</li>
    <li>Automated manual tasks with scripts, mainly written in C#.</li>
    <li>Provided quality assurance, offering valuable feedback for design and data errors, and resolved bottlenecks for a more efficient process.</li>
    <li>Making relevant changes to data pipelines to fit the requirements, increase efficiency.</li>
    <li>Quality assurance samples before sending them to clients for final review.</li>
</ul>

<h3>TechBank Group - Software Developer Intern</h3>
<p>October 2020</p>
<ul>
    <li>Assisted in maintaining CRM and ERP applications, addressing issues and implementing improvements.</li>
    <li>Gained experience in web application development, API creation, and SQL database management.</li>
    <li>Implemented CRUD operations for various models in the system, maintained codebase, refactored for clean codes.</li>
    <li>Used Git for version control.</li>
</ul>
</div>`;

var project = `<div class="section">
<h2>Personal Projects</h2>
<p><strong>Dating App (C#, ASP.NET, Angular)</strong></p>
<p>Developed a web application using C# and Angular, emphasizing Dependency Injection and MVC architecture.</p>

<p><strong>Job Insight (C#, ASP.NET Web API, Razor Page)</strong></p>
<p>I am building this to track my job application using ASP.NET Web API and Razor Page.</p>

<p><strong>Digital Resume (HTML, CSS, JavaScript)</strong></p>
<p>A terminal-like interface where you can type in commands and it will return my resume and other things about myself. It is hosted on <a href="https://latte1sugar.xyz">https://latte1sugar.xyz</a>.</p>
</div>
</div>`;

var education = `<div class="section">
<h2>Education</h2>
<h3>University of Technology Sydney</h3>
<p>Bachelor’s Degree in IT</p>
<p>Enterprise System Development</p>
<ul>
    <li>Learnt concepts of software development, project management, data structures and algorithms, and cloud technologies during this course.</li>
    <li>Application Development: applied design principles, developed and maintained application, mainly using C#, Java, and SQL.</li>
</ul>
<p>Network Security</p>
<ul>
<li>Networking Fundamentals: networking models and protocols, network security concepts, working on some common attacks like: DoS, SQL Injection, etc.</li>
    <li>Web Hosting: skills to set up a web hosting environment on Linux using Nginx, virtual hosting to run multiple websites on one machine.</li>
</ul>
</div>`;

var skills = `<div class="section">
<h2>Skills</h2>
<p>Programming Languages: C#, JavaScript/TypeScript, Python, Java.</p>
<p>Web Technologies: .NET, ASP.NET, Angular, HTML, CSS.</p>
<p>Database: MySQL, SQL Server, MongoDB.</p>
<p>Others: Git, Postman, Linux, Proxmox.</p>
<p>Design: Photoshop, Lightroom, Premiere Pro, Figma.</p>
</div>`;

var resume = header + summary + experience + project + skills + education;

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
  } else if (
    command === "show projects" ||
    command === "show project" ||
    command === "sh projects" ||
    command === "sh project"
  ) {
    return ` ${name} ${project}`;
  } else if (
    command === "show education" ||
    command === "sh education" ||
    command === "sh edu" ||
    command === "show edu"
  ) {
    return `${name} ${education}`;
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

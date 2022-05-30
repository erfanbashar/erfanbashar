function onLoad() {
    loadText();
}

function loadText() {
    loadHomeText();
    loadAboutText();
    loadPortfolio();
    // loadSkills();
}

function loadSkills() {
    // <h3 class="w3-border-amber">SKILLS & TOOLS</h3>
    // <!--TECHNICAL SKILLS-->
    // <h4>Technical skills</h4>
    // <ul class="w3-ul" style="font-weight: 500;">
    //     <li><span style="font-style: italic;">Programming Languages:</span> Java, SQL, PL/SQL, JS, Shell Script</li>
    //     <li><span style="font-style: italic;">Web Design:</span> HTML5, CSS3, Bootstrap</li>
    //     <li><span style="font-style: italic;">Web Development Framework:</span> SpringBoot, Hibernate, Lombok</li>
    //     <li><span style="font-style: italic;">DBMS:</span> Oracle DB, MySQL</li>
    //     <li><span style="font-style: italic;">API Integration & Testing:</span> REST, Postman, SoapUI</li>
    //     <li><span style="font-style: italic;">Technical Writing & Documentation:</span> Test Cases, BRD, SRS</li>
    //     <li><span style="font-style: italic;">Technical Testing:</span> UI/UX Test, Patch Service Pack Testing, UAT</li>
    //     <li><span style="font-style: italic;">VCS & Code Repo:</span> Git, GitHub</li>
    //     <li><span style="font-style: italic;">IT Issue & Task Management:</span> Microsoft SCSM</li>
    // </ul>

    let header = document.createElement("h3");
    header.className = "w3-border-amber";
    header.textContent = "SKILLS & TOOLS";
    document.querySelector("#skills").appendChild(header);

    let subHeader = document.createElement("h4");
    subHeader.textContent = "Technical Skills";
    document.querySelector("#skills").appendChild(subHeader);

    let listSkill = document.createElement("ul");
    listSkill.className = "w3-ul";
    listSkill.style.fontWeight = "500";

    let span = document.createElement("span");
    span.id = "skillSpan";
    span.textContent = "Programming Languages: ";


    listSkill.appendChild(span, createMenuItem("Git, GitHub"));


    document.querySelector("#skills").appendChild(listSkill);
}

function loadPortfolio() {

    let portfolioHeader = document.createElement("h2");
    portfolioHeader.className = "w3-border-bottom w3-border-amber";
    portfolioHeader.setAttribute('style', 'border-width: 3px !important');
    portfolioHeader.textContent = "PORTFOLIO";
    document.querySelector("#portfolio").appendChild(portfolioHeader);
    loadEmploymentHistory();
}

function loadEmploymentHistory() {

    let mainDiv = document.createElement("div");
    mainDiv.className = "w3-container w3-margin-top-2 w3-cursive";
    mainDiv.id = "employment-history";

    let empHisHeader = document.createElement("h3");
    empHisHeader.className = "w3-border-amber";
    empHisHeader.textContent = "EMPLOYMENT HISTORY";
    mainDiv.appendChild(empHisHeader);
    let div = document.createElement("div");
    getMtbExperience(div);
    getBblExperience(div);
    mainDiv.appendChild(div);

    document.querySelector("#portfolio").appendChild(mainDiv);
}

function getBblExperience(div) {
    let organizationName = document.createElement("h4");
    organizationName.textContent = "BRAC Bank Limited";
    div.appendChild(organizationName);

    var designation = document.createElement("h4");
    designation.textContent = "Senior Officer, Core Banking Application, Technology Division";
    div.appendChild(designation);

    var tenor = document.createElement("p");
    tenor.style.textAlign = "right";
    tenor.textContent = "May 2019 - June 2021";
    div.appendChild(tenor);

    designation = document.createElement("h4");
    designation.textContent = "Officer, Core Banking Application, Technology Division";
    div.appendChild(designation);

    tenor = document.createElement("p");
    tenor.style.textAlign = "right";
    tenor.textContent = "August 2017 - April 2019";
    div.appendChild(tenor);

    let jobDescription = document.createElement("ul");
    jobDescription.className = "w3-ul";
    jobDescription.style.fontWeight = "500";
    jobDescription.appendChild(createMenuItem("Enhanced existing modules and develop new features to provide critical resolution, and analysed, modified, and supported for RCA and Permanent Resolution of the Core Banking Application."));
    jobDescription.appendChild(createMenuItem("Analysed business requirements, produced system design to support upgrades and ongoing maintenance, defined problem-solving procedures through interaction with internal customers (up to L2) to prepare, compare and recommend alternate solutions."));
    jobDescription.appendChild(createMenuItem("Wrote, tested, and debugged SQL/PL-SQL codes, stored procedures, views and functions, and other ETL processes to ensure optimal performance, reliability, and integrity."));
    jobDescription.appendChild(createMenuItem("Supported business data analysis and developed customized reports for ad-hoc data requests."));
    jobDescription.appendChild(createMenuItem("Worked in multiple projects with project managers, businesses owners, analyst teams, and clients for prototyped end-to-end analysis, implemented system validation, gathered BRS and SRS, UAT, and Post Production verification."));
    jobDescription.appendChild(createMenuItem("Documented and reviewed code, provided reports, and peer feedback."));
    div.appendChild(jobDescription);
}

function getMtbExperience(div) {
    let organizationName = document.createElement("h4");
    organizationName.textContent = "Mutual Trust Bank Limited";
    div.appendChild(organizationName);

    let designation = document.createElement("h4");
    designation.textContent = "Senior Officer, Digital Banking Division";
    div.appendChild(designation);

    let tenor = document.createElement("p");
    tenor.style.textAlign = "right";
    tenor.textContent = "July 2021 - Present";
    div.appendChild(tenor);

    let jobDescription = document.createElement("ul");
    jobDescription.className = "w3-ul";
    jobDescription.style.fontWeight = "500";
    jobDescription.appendChild(createMenuItem("Managing projects throughout the entire execution period to ensure success in terms of scope, budget, and timeline."));
    jobDescription.appendChild(createMenuItem("Working as the “missing middle” between business and CBS application to integrate systems for achieving efficient solutions."));
    jobDescription.appendChild(createMenuItem("Developing and reviewing comprehensive project plans to bundle requirements with goals, and coordinating various stakeholders during all project phases, from initial development through implementation."));
    jobDescription.appendChild(createMenuItem("Monitoring project progress continuously and making detailed scheduled reports on milestones and deliverables."));
    jobDescription.appendChild(createMenuItem("Communicating proactively with all involved personnel to encourage, identify problems, create solutions, and implement efficiency improvements."));
    jobDescription.appendChild(createMenuItem("Analysing economics of project plans and providing actionable feedback relating to cost-benefit and return-on-investment standards."));
    jobDescription.appendChild(createMenuItem("Oversee acquisition of resources and materials as needed before and during projects by talking with customers, team members, managers, and in-house accountants and negotiating price and payment agreements with vendors."));
    div.appendChild(jobDescription);
}

function createMenuItem(name) {
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}

function loadHomeText() {
    let nameText = document.createElement("p");
    nameText.id = "nameText";
    nameText.style.fontStyle = "italic";
    nameText.style.fontSize = "xx-large";
    nameText.textContent = "A M A Erfan Bashar";

    let homeText = document.createElement("p");
    homeText.id = "homeText";
    homeText.textContent = "CBS Developer & FinTech Solution Provider|Oracle Certified for SQL|Java, Javascript & PL/SQL Developer|Love Tech & Football|";

    document.querySelector("#home").appendChild(nameText);
    document.querySelector("#home").appendChild(homeText);
}

function loadAboutText() {
    let aboutText = document.createElement("p");
    aboutText.id = "aboutText";
    aboutText.style.textAlign = "justify";
    aboutText.className = "w3-margin-top-2";
    aboutText.textContent = "A Focused and quick-learning individual with more than 4 years of experience in development, customization, and support FinTech Enterprise Applications. A CBS application solution provider with expertise in working with Java web-based technologies and enterprise-level DB configuration, along with managing several technology projects in agile environments. Confident communicator and strategic thinker to build software customizable to meet organizational needs and highlight core competencies.";

    let aboutHeader = document.createElement("h2");
    aboutHeader.className = "w3-border-bottom w3-border-amber";
    aboutHeader.setAttribute('style', 'border-width: 3px !important');
    aboutHeader.textContent = "ABOUT";

    document.querySelector("#about").appendChild(aboutHeader);
    document.querySelector("#about").appendChild(aboutText);
}

function toggleNavigation() {
    let nav = document.getElementById("mobile-nav");
    if (nav.classList.contains('w3-show')) {
        nav.classList.remove('w3-show');
    } else {
        nav.classList.add('w3-show');
    }
}

function getLinkedin() {
    var linkedin = document.querySelector("#linkedin");
    linkedin.href = "https://www.linkedin.com/in/erfanbashar/";
}

function getGithub() {
    var github = document.querySelector("#github");
    github.href = "https://github.com/erfanbashar";
}

function getFacebook() {
    var facebook = document.querySelector("#facebook");
    facebook.href = "https://www.facebook.com/erfan.bashar.7/";
}

function getInstagram() {
    var instagram = document.querySelector("#instagram");
    instagram.href = "https://www.instagram.com/erfanbashar13/";
}

function getCv() {
    var cv = document.querySelector("#cv");
    cv.href = "https://drive.google.com/file/d/1AsJhjHsWW67U3DXu2Vup-XMm_TEn5KFg/view?usp=sharing";
}
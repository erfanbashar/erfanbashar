function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function onLoad() {
    loadText();
}

function loadText() {
    loadName();
    loadAboutText();
    loadPortfolio();
    loadCertificates();
    loadEducations();
    loadTestimonial()
}

function loadName() {
    let nameText = document.createElement("p");
    nameText.id = "nameText";
    nameText.style.fontStyle = "italic";
    nameText.style.fontSize = "xx-large";
    nameText.textContent = "A M A Erfan Bashar";
    document.querySelector("#home").appendChild(nameText);

    loadHomeText();
}

function loadAboutText() {
    let aboutText = document.createElement("p");
    aboutText.id = "aboutText";
    aboutText.style.textAlign = "justify";
    aboutText.className = "w3-margin-top-2";
    aboutText.textContent = "A focused, quick-learning tech solutionist in the FinTech industry with more than 6 years of experience in the development, customization, support, and manage enterprise applications. Expertise in CBS application solutions with expertise in working with Java web-based technologies and managing several technology projects in agile environments. Confident communicator and strategic thinker to build scalable software customizable to meet organizational needs";

    let aboutHeader = document.createElement("h2");
    aboutHeader.className = "w3-border-bottom w3-border-amber";
    aboutHeader.setAttribute('style', 'border-width: 3px !important');
    aboutHeader.textContent = "ABOUT";

    document.querySelector("#about").appendChild(aboutHeader);
    document.querySelector("#about").appendChild(aboutText);
}

function loadPortfolio() {

    let portfolioHeader = document.createElement("h2");
    portfolioHeader.className = "w3-border-bottom w3-border-amber";
    portfolioHeader.setAttribute('style', 'border-width: 3px !important');
    portfolioHeader.textContent = "PORTFOLIO";
    document.querySelector("#portfolio").appendChild(portfolioHeader);
    loadEmploymentHistory();
}

function loadCertificates() {

    let header = document.createElement("h3");
    header.className = "w3-border-amber";
    header.textContent = "CERTIFICATION & TRAINING";
    document.querySelector("#certificate").appendChild(header);

    let ul1 = createList();
    document.querySelector("#certificate").appendChild(createSubheader("Oracle Certified SQL Developer"));
    ul1.appendChild(createMenuItem("Certified by Oracle University"));
    document.querySelector("#certificate").appendChild(ul1);

    let ul2 = createList();
    document.querySelector("#certificate").appendChild(createSubheader("Java Enterprise Edition with Spring Framework"));
    ul2.appendChild(createMenuItem("Trained from IBCS-PRIMAX Software (Bangladesh) Limited"));
    document.querySelector("#certificate").appendChild(ul2);

    let ul3 = createList();
    document.querySelector("#certificate").appendChild(createSubheader("Oracle Certified Java Associate"));
    ul3.appendChild(createMenuItem("Trained from IBCS-PRIMAX Software (Bangladesh) Limited"));
    document.querySelector("#certificate").appendChild(ul3);

}

function loadEducations() {

    let header = document.createElement("h3");
    header.className = "w3-border-amber";
    header.textContent = "EDUCATIONAL QUALIFICATIONS";
    document.querySelector("#educations").appendChild(header);

    document.querySelector("#educations").appendChild(createSubheader("Master of Business Administration"));
    let ul1 = createList();
    ul1.appendChild(createMenuItem("Department of Marketing, University of Dhaka"));
    ul1.appendChild(createMenuItem("April 2017 - December 2020"));
    document.querySelector("#educations").appendChild(ul1);

    document.querySelector("#educations").appendChild(createSubheader("Bachelor in Science"));
    let ul2 = createList();
    ul2.appendChild(createMenuItem("Department of Computer Science & Engineering, University of Dhaka"));
    ul2.appendChild(createMenuItem("January 2011 - December 2014"));
    document.querySelector("#educations").appendChild(ul2);

    document.querySelector("#educations").appendChild(createSubheader("Higher Secondary School Certificate"));
    let ul3 = createList();
    ul3.appendChild(createMenuItem("Notre Dame College"));
    ul3.appendChild(createMenuItem("2010"));
    document.querySelector("#educations").appendChild(ul3);

    document.querySelector("#educations").appendChild(createSubheader("Secondary School Certificate"));
    let ul4 = createList();
    ul4.appendChild(createMenuItem("Udayan School & College"));
    ul4.appendChild(createMenuItem("2008"));
    document.querySelector("#educations").appendChild(ul4);
}

function createList() {
    let ul = document.createElement("ul");
    ul.className = "w3-ul";
    ul.style.fontWeight = "600";

    return ul;
}

function createSubheader(subHeader) {
    let h4 = document.createElement("h4");
    h4.textContent = subHeader;
    return h4;
}

function loadHomeText() {

    let homeText = document.createElement("p");
    homeText.textContent = "CBS Developer & FinTech Solutionist|Oracle Certified for SQL|Java, Javascript & PL/SQL Developer|Love Football & Anyplace Around A Sea|";
    let homeTextArray = homeText.textContent.split("|");
    let part = 0;
    let partIndex = 0;
    let interval;
    let textDiv = document.createElement("div");
    textDiv.id = "text";
    let cursorDiv = document.createElement("div");
    cursorDiv.id = "cursor";
    document.querySelector("#home").appendChild(textDiv);
    document.querySelector("#home").appendChild(cursorDiv);

    let element = document.querySelector("#text");
    let cursor = document.querySelector("#cursor");

    function Type() {
        let text = homeTextArray[part].substring(0, partIndex + 1);
        element.innerHTML = text;
        partIndex++;

        if (text === homeTextArray[part]) {
            cursor.style.display = "none";
            clearInterval(interval);
            setTimeout(function() {
                interval = setInterval(Delete, 50);
            }, 1000);
        }
    }

    function Delete() {
        let text = homeTextArray[part].substring(0, partIndex - 1);
        element.innerHTML = text;
        partIndex--;

        if (text === '') {
            clearInterval(interval);
            if (part == (homeTextArray.length - 1)) {
                part = 0;
            } else {
                part++;
            }
            partIndex = 0;

            setTimeout(function() {
                cursor.style.display = "inline-block";
                interval = setInterval(Type, 100);
            }, 200);
        }
    }

    interval = setInterval(Type, 100);
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

    getNagadExperience(div);
    getMtbExperience(div);
    getBblExperience(div);
    
    mainDiv.appendChild(div);

    document.querySelector("#portfolio").appendChild(mainDiv);
}

function getNagadExperience(div) {
    let organizationName = document.createElement("h4");
    organizationName.innerHTML = '<span style="color: orange;">Digital Bank</span>' + ' | Nagad Limited';
    div.appendChild(organizationName);

    let designation = document.createElement("h4");
    designation.innerHTML = '<span style="color: orange;">Lead Engineer, CBS Integration & Projects</span>' + ' | June 2023 - Present';

    div.appendChild(designation);

    let jobDescription = document.createElement("ul");
    jobDescription.className = "w3-ul";
    jobDescription.style.fontWeight = "500";
    jobDescription.style.textAlign = "justify";
    jobDescription.appendChild(createMenuItem("Designing overall solution architecture and implementation plan for CBS implementation."));
    jobDescription.appendChild(createMenuItem("Identifying, tracking and reviewing CBS deliverables with efficient and quality code based on given specifications."));
    jobDescription.appendChild(createMenuItem("Developing, fixing, and improving CBS functionalities according to Business / System requirement."));
    jobDescription.appendChild(createMenuItem("Ensuring patch deployment planning and delivery of system integration."));
    jobDescription.appendChild(createMenuItem("Providing technical support and expertise advice throughout all technical-functional CBS features."));
    jobDescription.appendChild(createMenuItem("Identifying, defining and coordinating development activities for Change Request of CBS project."));
    div.appendChild(jobDescription);
}

function getMtbExperience(div) {
    let organizationName = document.createElement("h4");
    organizationName.innerHTML = '<span style="color: orange;">Digital Banking Division</span>' + ' | Mutual Trust Bank Limited';
    div.appendChild(organizationName);

    let designation = document.createElement("h4");
    designation.innerHTML = '<span style="color: orange;">Senior Officer</span>' + ' | July 2021 - June 2023';
    div.appendChild(designation);

    let jobDescription = document.createElement("ul");
    jobDescription.className = "w3-ul";
    jobDescription.style.fontWeight = "500";
    jobDescription.style.textAlign = "justify";
    jobDescription.appendChild(createMenuItem("Managed scope, budget, timeline, and end-to-end execution of technology projects"));
    jobDescription.appendChild(createMenuItem("Coordinated and integrated CBS systems for business stakeholders to achieve efficient solutions."));
    jobDescription.appendChild(createMenuItem("Constructed comprehensive project plans to bundle requirements with goals, and coordinated stakeholders during all project phases"));
    jobDescription.appendChild(createMenuItem("Monitored project progress continuously and developed detailed reports on milestones and deliverables"));
    jobDescription.appendChild(createMenuItem("Proactively identified problems, and proposed and implemented solutions to business stakeholders."));
    jobDescription.appendChild(createMenuItem("Analyzed projects budget and provided feedback relating to cost-benefit and return-on-investment standards"));

    div.appendChild(jobDescription);
}

function getBblExperience(div) {
    let organizationName = document.createElement("h4");
    organizationName.innerHTML = '<span style="color: orange;">Technology Division</span>' + ' | BRAC Bank Limited';
    div.appendChild(organizationName);

    let designation = document.createElement("h4");
    designation.innerHTML = '<span style="color: orange;">Senior Officer</span>' + ' | May 2019 - June 2021';

    div.appendChild(designation);

    designation = document.createElement("h4");
    designation.innerHTML = '<span style="color: orange;">Officer</span>' + ' | August 2017 - April 2019';
    div.appendChild(designation);

    let jobDescription = document.createElement("ul");
    jobDescription.className = "w3-ul";
    jobDescription.style.fontWeight = "500";
    jobDescription.style.textAlign = "justify";
    jobDescription.appendChild(createMenuItem("Enhanced existing modules and developed new features of the Core Banking Application - Finacle."));
    jobDescription.appendChild(createMenuItem("Wrote, tested, and debugged codes, stored procedures, views, functions, ETL processes with SQL/PL-SQL"));
    jobDescription.appendChild(createMenuItem("Configured API to integrate external applications with the Core Banking Application - Finacle"));
    jobDescription.appendChild(createMenuItem("Analyzed business requirements, designed systems support upgrades and maintenance, and defined problem-solving procedures through interaction with internal customers (up to L2) towards solutions."));
    jobDescription.appendChild(createMenuItem("Supported business data analysis and developed customized reports for ad-hoc data requests."));
    jobDescription.appendChild(createMenuItem("Collaborated with project managers and businesses owners for end-to-end analysis, implemented system validations, gathered BRS and SRS, UAT, Post-production verification, documented code, provided reports, performed code review, and peer feedback"));
    div.appendChild(jobDescription);
}

function createMenuItem(name) {
    let li = document.createElement("li");
    li.textContent = name;
    return li;
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
    let linkedin = document.querySelector("#linkedin");
    linkedin.href = "https://www.linkedin.com/in/erfanbashar/";
}

function getGithub() {
    let github = document.querySelector("#github");
    github.href = "https://github.com/erfanbashar";
}

function getFacebook() {
    let facebook = document.querySelector("#facebook");
    facebook.href = "https://www.facebook.com/erfan.bashar.7/";
}

function getInstagram() {
    let instagram = document.querySelector("#instagram");
    instagram.href = "https://www.instagram.com/erfanbashar13/";
}

async function getCv() {
    let cv = document.querySelector("#cv");

    const request = await fetch("https://ipinfo.io/json?token=8d1dda29c0e932");
    const jsonResponse = await request.json();
    const orgCountry = jsonResponse.country;

    if(orgCountry == 'BD') {
        cv.href = "https://drive.google.com/file/d/12GfKbB0WbOGeLXNHz8Vu0uYfwUXXxkY8/view?usp=sharing";
    }
    else {
        cv.href = "https://drive.google.com/file/d/11m5XjFKuj_wEieCRtb-nIrmabQ1zJHkm/view?usp=drive_link";
    }
    
}

// testimonial section

function loadTestimonial() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        let j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 1,
                },

            }
        });
    }

    // bubbles -----------------


    setInterval(function() {
        let size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function() {
            $(this).remove()
        });
    }, 350);

}

// testimonial section

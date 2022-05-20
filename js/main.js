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
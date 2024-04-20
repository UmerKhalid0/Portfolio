let skillButton = document.querySelectorAll(".skill-a");
let skillBoxes = document.querySelectorAll(".skills-1");
let navbarAnchors = document.querySelectorAll(".navbar-a");
let toTop = document.querySelector(".backtotop");
let hamburger = document.querySelector(".hamburger");
let navbarRes = document.querySelector(".responsive-nav");
let closeNav = document.querySelector(".cross-nav");
let section = document.querySelectorAll(".sections");

function hider() {
    toTop.hide();
}

window.addEventListener("scroll", () => {
    let tracker = this.scrollY;
    function checker() {
        if (tracker > 1000) {
            toTop.classList.add("shower");
        }else if(tracker < 1000){
            toTop.classList.remove("shower");
        }
    }
    checker();
});



toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

skillButton[0].addEventListener("click", () => {
    skillBoxes[0].classList.add('active');
    skillBoxes[1].classList.remove('active');
    skillBoxes[2].classList.remove('active');
});
skillButton[1].addEventListener("click", () => {
    skillBoxes[1].classList.add('active');
    skillBoxes[0].classList.remove('active');
    skillBoxes[2].classList.remove('active');
});
skillButton[2].addEventListener("click", () => {
    skillBoxes[2].classList.add('active');
    skillBoxes[0].classList.remove('active');
    skillBoxes[1].classList.remove('active');
});

navbarAnchors[0].addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth',
    })
});
navbarAnchors[1].addEventListener("click", () => {
    section[0].scrollIntoView({behavior: "smooth"});
});
navbarAnchors[2].addEventListener("click", () => {
    section[1].scrollIntoView({behavior: "smooth"});
});
navbarAnchors[3].addEventListener("click", () => {
    section[2].scrollIntoView({behavior: "smooth"});
});
navbarAnchors[4].addEventListener("click", () => {
    section[3].scrollIntoView({behavior: "smooth"});
});
navbarAnchors[5].addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth',
    })
});
navbarAnchors[6].addEventListener("click", () => {
    section[0].scrollIntoView({behavior: "smooth"});
});
navbarAnchors[7].addEventListener("click", () => {
    section[1].scrollIntoView({behavior: "smooth"});
});
navbarAnchors[8].addEventListener("click", () => {
    section[2].scrollIntoView({behavior: "smooth"});
});
navbarAnchors[9].addEventListener("click", () => {
    section[3].scrollIntoView({behavior: "smooth"});
});

let nav = 0;

hamburger.addEventListener("click", () => {
    if (nav == 0){
        navbarRes.classList.add("navbar-classadd");
        navbarRes.classList.remove("navbar-classadd2");
        nav = 1;
    }
});

closeNav.addEventListener("click", () => {
    if (nav == 1){
        navbarRes.classList.add("navbar-classadd2");
        navbarRes.classList.remove("navbar-classadd");
        nav = 0;
    }
})

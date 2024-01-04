// ========================= MAIN SHOW Y HIDDEN ======================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// ======== MENU SHOW ========

// volidate if constant exists

if (navToggle) {
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('show_menu')
    })
}

// ========= MENU HIDDEN =========
// volidate if constant exists
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show_menu')
    })
}

/* ============================= REMOVE MENU MOBILE ================================ */

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each  nav__link, we remove the show menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));


/* ============================= accordin skills================================ */
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');
function toggleSkills(){
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
       skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className =  'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})

/* ============================= Qualification Tabs ========================== */

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/* ============================= Services Model ========================== */
const modalViews = document.querySelectorAll('.services__model');
const modelBtns = document.querySelectorAll('.services__button');
const modelClose = document.querySelectorAll('.services__model__close');

let model = function (modelClick) {
    modalViews[modelClick].classList.add('active__modal')   
}

modelBtns.forEach((modelBtns,i)=>{
    modelBtns.addEventListener('click',()=>{
        model(i)
    })
})

modelClose.forEach((modelClose,i)=>{
    modelClose.addEventListener('click',()=>{
        modalViews.forEach((modalViews) =>{
            modalViews.classList.remove('active__modal')
        })
    })
})

/* ============================= portfolio swipper ========================= */

var slides=document.querySelector(`.swiper-wrapper`).children;
var nextSlide=document.querySelector(".slide__arrow__right")
var prevSlide=document.querySelector(`.slide__arrow__left`)
var totalSlides=slides.length;
var index = 0;

nextSlide.onclick = function () {
    next("next");
};
prevSlide.onclick = function () {
    next("prev");
};

function next(direction) {
    if (direction=="next") {
        index++;
        if (index==totalSlides) {
            index=0;
        }
    }
    else{
        if (index==0) {
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("portfolio__content__active");
        
    }
    slides[index].classList.add("portfolio__content__active");
}

/* ============================= Social Section Active Link ========================= */

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link');
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link');
        }
    })
}
window.addEventListener('scroll',scrollActive);

/* ============================= CHANGE BACKGROUND HEADER ========================= */
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 180) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

/* ============================= SHOW SCROLL UP ========================= */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);

/* ============================= DARK THEME LIGHT ========================= */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrenticon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](darkTheme)
}

themeButton.addEventListener('click',() => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrenticon())
})

/* ============================= DARK THEME LIGHT ========================= */

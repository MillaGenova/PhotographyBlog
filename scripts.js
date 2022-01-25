window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Common buttons
const title = document.getElementById('title');
const homeButton = document.getElementById('home');
const portfolioButton = document.getElementById('portfolio');
const contactButton = document.getElementById('contact');
const goToGalleryButton = document.getElementById('gallery');

title.addEventListener('click', openHome);
homeButton.addEventListener('click', openHome);
portfolioButton.addEventListener('click', openPortfolio);
contactButton.addEventListener('click', openContact);

function openHome() {
    document.location.href = "index.html"
}

function openPortfolio() {
    document.location.href = "portfolio.html"
}

function openContact() {
    document.location.href = "contact.html"
}

// Portfolio page clickable elements
const landscapeButton = document.getElementById('landscape');
const floralButton = document.getElementById('floral');
const macroWorldButton = document.getElementById('macroWorld');
const aestheticsButton = document.getElementById('aesthetics');
const animalsButton = document.getElementById('animals');

landscapeButton.addEventListener('click', openLandscapes);
floralButton.addEventListener('click', openFloral);
macroWorldButton.addEventListener('click', openMacroworld);
aestheticsButton.addEventListener('click', openAesthetics);
animalsButton.addEventListener('click', openAnimals);

function openLandscapes() {
    document.location.href = "landscapes.html"
}

function openFloral() {
    document.location.href = "floral.html"
}

function openMacroworld() {
    document.location.href = "macro-world.html"
}

function openAesthetics() {
    document.location.href = "aesthetics.html"
}

function openAnimals() {
    document.location.href = "animals.html"
}
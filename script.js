const hamburger = document.querySelector('.hamburger');
const myLinks = document.querySelector('.myLinks');

hamburger.addEventListener('click', () => {
    myLinks.classList.toggle('show');
});
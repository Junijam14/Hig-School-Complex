const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const video = document.getElementByld('myVideo');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
})
//Mobile Button:
const menuButton = document.querySelector('.menu-button');
const mobile_menu = document.querySelector('.mobile_nav');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuButton.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuOpen = false;
    }
}); 

//Light/Dark Theme*:
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("light-theme");
}



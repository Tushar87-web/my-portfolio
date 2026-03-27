const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.navv-links');

menuIcon.onclick =() => {
    navLinks.classList.toggle('active');
}
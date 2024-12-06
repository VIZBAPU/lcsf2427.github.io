/*
Name: Vishwadeepsinh V Vaghela
File Name: script.js
*/

/* Function to toggle the hamburger menu on mobile view */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

/* Function to close the menu when clicking on any navigation link */
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

/* Adding event listeners for the menu toggle and link click */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    menuIcon.addEventListener('click', toggleMenu);

    // Close the menu when a link is clicked on mobile
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const aside = document.querySelector("aside");

    menuBtn.addEventListener("click", function() {
        aside.classList.toggle("closed");
    });
});

const dropdown = document.getElementById('dropdown-1');
const toggleGroup = document.getElementById('toggle-group');

dropdown.addEventListener('click', () => {
  // Toggle the visibility of the #toggle-group
  toggleGroup.classList.toggle('visible');
});
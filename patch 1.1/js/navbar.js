document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const aside = document.querySelector("aside");

    menuBtn.addEventListener("click", function() {
        aside.classList.toggle("closed");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("dropdown-1");
    const content = document.querySelector("#toggle-group");

    toggleBtn.addEventListener("click", function(){
        content.style.display("block");
    });
});
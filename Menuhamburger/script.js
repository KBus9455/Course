const Arrow = document.querySelector(".fa-arrow-circle-up");
const Menu = document.querySelector("nav");

Arrow.addEventListener("click", function () {
    Menu.classList.toggle("active");
    Arrow.classList.toggle("active");
})
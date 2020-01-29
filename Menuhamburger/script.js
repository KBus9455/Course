const Arrow = document.querySelector(".arrow");
const Menu = document.querySelector("nav");

Arrow.addEventListener("click", function () {
    Menu.classList.toggle("active");
    Arrow.classList.toggle("active");
})
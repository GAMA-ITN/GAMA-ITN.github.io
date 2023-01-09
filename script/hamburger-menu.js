const btnMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-link");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

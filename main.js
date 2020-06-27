const checkBtn = document.querySelector(".checkBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");
const menuAbout = document.querySelector(".menuAbout");
const menuFavorites = document.querySelector(".menuFavorites");
const menuPortfolio = document.querySelector(".menuPortfolio");
const goHome = document.querySelector(".homeLogo");

checkBtn.addEventListener("click", () => {
  menuToggle();
});

menuAbout.addEventListener("click", () => {
  menuToggle();
});

menuFavorites.addEventListener("click", () => {
  menuToggle();
});

menuPortfolio.addEventListener("click", () => {
  menuToggle();
});

function menuToggle() {
  checkBtn.classList.toggle("clicked");
  console.log(checkBtn.classList.toggle);
  menu.classList.toggle("active");
  icons.classList.toggle("active");
}

const checkBtn = document.querySelector(".checkBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

checkBtn.addEventListener("click", () => {
  checkBtn.classList.toggle("clicked");
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

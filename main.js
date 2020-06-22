const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("clicked");
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

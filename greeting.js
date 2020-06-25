const nameForm = document.querySelector(".js-nameForm"),
  nameInput = nameForm.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  console.log(currentValue);
  printGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", handleSubmit);
}

function printGreeting(text) {
  nameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}! <br> What do you want to keep in the list?`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    printGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

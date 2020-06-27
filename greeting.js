const nameForm = document.querySelector(".js-nameForm"),
  nameInput = nameForm.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const signInBtn = document.querySelector(".signInBtn");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function greetingHandleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  printGreeting(currentValue);
  nameInput.value = "";
  saveName(currentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  signInBtn.addEventListener("click", greetingHandleSubmit);
  nameForm.addEventListener("submit", greetingHandleSubmit);
}

function resetName(event) {
  localStorage.removeItem(USER_LS, event);
  greeting.classList.remove(SHOWING_CN);
  askForName();
}

function printGreeting(text) {
  const resetNameBtn = document.createElement("button");
  resetNameBtn.classList.add("resetNameBtnClass");
  resetNameBtn.innerHTML = '<i class="fas fa-sign-out-alt"></>';
  nameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  resetNameBtn.addEventListener("click", resetName);
  greeting.innerText = `Hello ${text}!
  What do you want to keep in the list?
  `;
  greeting.append(resetNameBtn);
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

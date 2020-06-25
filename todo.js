const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";

let todos = [];

function deleteTodos(event) {
  const delBtn = event.target;
  const parentLi = delBtn.parentNode;
  todoList.removeChild(parentLi);
  const cleanTodos = todos.filter(function filterFunction(todo) {
    return todo.id !== parseInt(parentLi.id);
  });
  todos = cleanTodos;
  saveTodos();
}

function crossTodos(event) {
  //working on it
  //   saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function printTodo(text) {
  const creatLi = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const checkBoxBtn = document.createElement("button");
  const newId = todos.length + 1;
  const creatSpan = document.createElement("span");
  deleteBtn.innerText = "🗑";
  checkBoxBtn.innerText = "✓";
  deleteBtn.addEventListener("click", deleteTodos);
  checkBoxBtn.addEventListener("click", crossTodos);
  creatSpan.innerText = text;
  creatLi.appendChild(checkBoxBtn);
  creatLi.appendChild(creatSpan);
  creatLi.appendChild(deleteBtn);
  todoList.appendChild(creatLi);
  creatLi.id = newId;
  const todoObj = {
    text: text,
    id: newId,
  };
  todos.push(todoObj);
  saveTodos();
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function (todo) {
      printTodo(todo.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  printTodo(currentValue);
  todoInput.value = "";
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();

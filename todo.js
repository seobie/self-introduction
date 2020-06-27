//selectors
const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector(".js-todoInput");
const addTodoBtn = document.querySelector(".js-addTodoBtn");
const todoList = document.querySelector(".js-todoList");
const TODOS_LS = "todos";

// const COMPLETED_LI = "completed";

let todos = [];

//event listeners
addTodoBtn.addEventListener("click", addTodoBtnFunction);

//functions
function deleteBtnFunction(event) {
  const todoItem = event.target;
  const li = todoItem.parentNode;
  li.classList.add("todoFall");
  //    wiat for the transition to end
  li.addEventListener("transitionend", function () {
    // todoList.removeChild(li); //this doesn't work properly with transitionend..
    li.remove();
  });
  //clean todos from the local storage
  const cleanTodos = todos.filter(function (findIt) {
    //since li.id is not a number but a sting
    return findIt.id !== parseInt(li.id);
  });
  todos = cleanTodos;
  saveTodos();
}

function completeBtnFunction(event) {
  const todoItem = event.target.parentNode;
  if (todoItem.classList[0] === "todoLiClass") {
    todoItem.classList.toggle("todoCompleted");
  }
}

function addTodoBtnFunction() {
  printTodo(
    event.target.parentNode.parentNode.childNodes[1].childNodes[1].value
  );
  todoInput.value = "";

  //   printTodo(todoInput.value);
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function printTodo(text) {
  //create li
  const todoLi = document.createElement("li");
  todoLi.classList.add("todoLiClass");
  //create complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.classList.add("completeBtnClass");
  completeBtn.addEventListener("click", completeBtnFunction);
  //create span
  const newTodo = document.createElement("span");
  newTodo.innerText = text;
  newTodo.classList.add("newTodoClass");
  //create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class ="fas fa-trash"></i>';
  deleteBtn.classList.add("deleteBtnClass");
  //event listener
  deleteBtn.addEventListener("click", deleteBtnFunction);
  //create new id for todoLi and todoObj so they can be handled idividually
  const newId = todos.length + 1;
  todoLi.id = newId;
  // append created things in the list item
  todoLi.appendChild(completeBtn);
  todoLi.appendChild(newTodo);
  todoLi.appendChild(deleteBtn);
  //append the list item in the unordered list
  todoList.appendChild(todoLi);
  //create todo object to push in the todos array
  const todoObj = {
    text: text,
    id: newId,
  };
  //push the object in the todos array
  todos.push(todoObj);
  //save the array in the local storage
  saveTodos(todos);
}

function todoHandleSubmit(event) {
  //prevent the form from submitting
  event.preventDefault();
  const currentValue = todoInput.value;
  printTodo(currentValue);
  //empty the input
  todoInput.value = "";
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    //string(loadedTodos) to object
    const parsedTodos = JSON.parse(loadedTodos);
    //run functions each time
    parsedTodos.forEach((itIsMeaningless) => {
      //write the extracted texts in todoInput
      printTodo(itIsMeaningless.text);
    });
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", todoHandleSubmit);
}

init();

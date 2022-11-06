const addBtn = document.getElementById("to-do-btn-add");
const toDoContainer = document.getElementById("to-do-container");
const toDoInput = document.getElementById("to-do-input");

function preserveToDos() {
  const allToDos = Array.from(
    document.querySelectorAll(".to-do-instance p")
  ).map((el) => el.textContent);
  window.sessionStorage.setItem("todos", allToDos);
}

function loadToDos() {
  const loadedToDos = window.sessionStorage.getItem("todos").split(",");
  if (loadedToDos && loadedToDos.length > 0) {
    loadedToDos.forEach((toDo) => {
      toDoContainer.appendChild(createToDoElement(toDo));
    });
  }
}

function createToDoElement(el) {
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("to-do-instance");
  const toDoP = document.createElement("p");
  toDoP.textContent = el;

  const deleteToDoBtn = document.createElement("button");
  deleteToDoBtn.textContent = "❌";
  deleteToDoBtn.addEventListener("click", () => removeToDo(toDoDiv));

  toDoDiv.appendChild(toDoP);
  toDoDiv.appendChild(deleteToDoBtn);

  return toDoDiv;
}

function appendNewToDo(toDo) {
  const newToDoElement = createToDoElement(toDo);
  toDoContainer.appendChild(newToDoElement);
  preserveToDos();
}

function addToDo() {
  if (toDoInput.value) {
    appendNewToDo(toDoInput.value);
    toDoInput.value = "";

    preserveToDos();
  } else {
    alert("Please add some text");
  }
}

function removeToDo(toDo) {
  toDo.remove();
  preserveToDos();
}

addBtn.addEventListener("click", addToDo);

loadToDos();

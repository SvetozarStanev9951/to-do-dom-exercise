console.log("Script started");
const addToDoBtn = document.getElementById("add-to-do-btn");
const toDoInput = document.getElementsByTagName("input")[0];
const toDoContainer = document.querySelector("#to-do-container");

function preserveToDos() {
  const allToDos = Array.from(
    document.querySelectorAll(".to-do-instance p")
  ).map((el) => el.textContent);
  window.sessionStorage.setItem("todos", allToDos);
}

function loadToDos() {
  const loadedToDos = window.sessionStorage.getItem("todos").split(",");
  if (loadedToDos && loadedToDos.length > 0) {
    console.log(loadedToDos);
    loadedToDos.forEach((toDo) => {
      toDoContainer.appendChild(createToDo(toDo));
    });
  }
}

function createToDo(text) {
  const divElement = document.createElement("div");
  divElement.classList.add("to-do-instance");

  const pElement = document.createElement("p");
  pElement.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    divElement.remove();
    preserveToDos();
  });

  divElement.appendChild(pElement);
  divElement.appendChild(deleteBtn);

  return divElement;
}

function addToDo() {
  const validText = toDoInput.value.trim();
  if (validText) {
    const newToDo = createToDo(validText);
    toDoContainer.appendChild(newToDo);
    toDoInput.value = "";
    preserveToDos();
  } else {
    alert("Please type in some text");
  }
}

addToDoBtn.addEventListener("click", addToDo);

loadToDos();

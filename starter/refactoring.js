const addToDoBtn = document.getElementById("add-to-do-btn");
const toDoInput = document.getElementsByTagName("input")[0];
const toDoContainer = document.querySelector("#to-do-container");

let toDos = [];

function addToDo() {
  const validText = toDoInput.value.trim();
  if (validText) {
    const newToDoObj = {
      text: validText,
      completed: false,
    };
    toDos.push(newToDoObj);
    renderToDos();
    toDoInput.value = "";
  } else {
    alert("Please type in some text");
  }
}

function renderToDos() {
  // clear toDoContainer
  toDoContainer.innerHTML = "";
  // create new element
  toDos.forEach((todo) => {
    const newToDoElement = createToDoElement(todo);
    toDoContainer.appendChild(newToDoElement);
  });
  // append to toDoContainer
}

function createToDoElement(todoObj) {
  const { text, completed } = todoObj;

  const divElement = document.createElement("div");
  divElement.classList.add("to-do-instance");

  const pElement = document.createElement("p");
  pElement.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    toDos = toDos.filter((el) => el.text !== text);
    divElement.remove();
  });

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = completed;
  checkbox.addEventListener("click", () => {
    completed = !completed;
  });

  divElement.appendChild(pElement);
  divElement.appendChild(checkbox);
  divElement.appendChild(deleteBtn);

  return divElement;
}

addToDoBtn.addEventListener("click", addToDo);
toDoInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addToDo();
  }
});

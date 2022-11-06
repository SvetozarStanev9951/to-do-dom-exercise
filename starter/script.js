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

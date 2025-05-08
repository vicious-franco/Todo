const todo = document.querySelector(".todo_input");
const add = document.getElementById("add");
let todoCounter = document.querySelector(".todoCounter");
let todoContainer = document.querySelector(".list");

const todoList = [];
let renderTodo = "";
const htmlData = (info) => {
  return `
        <div class="text-render">
        <div class="list_p">
            <div class="circle">   
            </div>
            <p class="info">${info}</p>
        </div>
            <img src="./images/icon-cross.svg" alt="cross" />
    </div>`;
};
add.addEventListener("click", () => {
  const data = todo.value;
  todoList.push(data);
  todoContainer.innerHTML = todoList.map((data) => htmlData(data)).join("");
  todoCounter.innerHTML =
    todoList.length === 1 ? "1 Item" : `${todoList.length} items`;
});

document.addEventListener("click", (e) => {
  const circle = e.target.closest(".circle");
  const lineThrough = e.target.closest(".list_p");
  lineThrough.classList.toggle("completed");
  if (circle) {
    const checkedIcon = document.createElement("img");

    circle.classList.toggle("circle_check");

    if (circle.classList.contains("circle_check")) {
      checkedIcon.src = "./images/icon-check.svg";
      circle.appendChild(checkedIcon);
    }
  } else {
    if (checkedIcon) {
      circle.removeChild(checkedIcon);
    }
  }
});

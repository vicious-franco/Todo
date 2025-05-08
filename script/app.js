const todo = document.querySelector(".todo_input");
const add = document.getElementById("add");
let todoCounter = document.querySelector(".todoCounter");
let todoContainer = document.querySelector(".Todo_output");

const todoList = ["leon"];
let renderTodo = "";
const htmlData = (info) => {
  return `
        <div class="text-render">
        <div class="list_p">
            <div class="circle">
                <img src="./images/icon-check.svg" alt="" />
            </div>
            <p>${info}</p>
        </div>
            <img src="./images/icon-cross.svg" alt="" />
    </div>`;
};

add.addEventListener("click", () => {
  const data = todo.value;
  todoList.push(data);
  todoList.forEach((todo) => htmlData(todo));
  todoContainer.innerHTML = htmlData();
});

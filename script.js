const input = document.getElementById("todo-input");
console.log(input);

const todoList = document.getElementById("todo-list");
console.log(todoList);

const btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click", addTodo);

function addTodo() {
  console.log("add to do func exe");
  const newTodo = input.value.trim();
  console.log(newTodo);

  if (newTodo) {
    const li = document.createElement("li");
    li.textContent = newTodo;
    todoList.addEventListener("click", (e) => {
      this.removeChild(e.target);
    });

    todoList.appendChild(li);
    input.value = "";
  } else {
    console.log("Please enter a task!");
  }
}

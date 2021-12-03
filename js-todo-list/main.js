const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector("ul");
const todoList = document.querySelector(".todoList");

todoList.addEventListener("click", (e) => {
  if (e.target.className === "close") {
    e.target.parentNode.remove();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.className !== "checked" && e.target.className === "value") {
    e.target.className = "checked";
  } else if (e.target.className === "checked") {
    e.target.className = "value";
  }
});

addBtn.addEventListener("click", (e) => {
  let getValue = input.value;
  if (getValue.trim()) {
    const list = document.createElement("li");
    const close = document.createElement("span");

    list.className = "value";
    list.innerHTML = getValue;

    close.className = "close";

    close.innerText = "x";

    ul.appendChild(list);
    list.appendChild(close);
    input.value = "";
  }
});

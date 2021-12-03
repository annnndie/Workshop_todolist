const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector("ul");
const todoList = document.querySelector(".todoList");

// const close = document.querySelector(".close");
// console.log(close);
// const checked = document.querySelector(".checked");
// console.log(checked);

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

// input.addEventListener("form", (e) => {});

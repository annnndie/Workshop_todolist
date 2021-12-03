const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector("ul");

// const close = document.querySelector(".close");
// console.log(close);
// const checked = document.querySelector(".checked");
// console.log(checked);

ul.addEventListener("click", (e) => {
  if (e.target.className !== "checked") {
    e.target.className = "checked";
  } else {
    e.target.className = "";
  }
});

input.addEventListener("form", (e) => {});

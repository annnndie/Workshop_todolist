// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#addBtn");
  const task_input = document.querySelector("#input");
  const ul = document.querySelector("ul");
  // console.log(ul.children);

  // 當使用者選到某個 li 時，有 class checked 屬性
  ul.addEventListener("click", (e) => {
    // console.log(e.target);
    if(e.target && e.target.className === "checked"){
      e.target.classList.remove("checked");
    }else{
      e.target.classList.add("checked");
    }
    
  })

  //移除功能
  ul.addEventListener("click", (e) => {
    console.log(e.target.parentNode);
    if(e.target && e.target.nodeName == "SPAN"){
      e.target.parentNode.remove();
    }
  })

  // 按 + 新增 to do list
  addBtn.addEventListener("click", (e) => {
    if(e.target && e.target.nodeName == "SPAN" && task_input.value != ""){
      // 新增 to do list
      const note = document.createElement("li");
      note.className = "todoItem";
      note.innerHTML = task_input.value;
      ul.appendChild(note);

      //close btn
      const closeBtn = document.createElement("span");
      closeBtn.className ="close";
      closeBtn.innerHTML = "x";
      note.appendChild(closeBtn);

    }
    
  })

  // 按 enter 新增 to do list
  task_input.addEventListener("keydown", (e) => {
    // 新增 to do list
    if(e.key == "Enter" && e.target.value != ""){
      // console.log(e.key);
      const note = document.createElement("li");
      note.className = "todoItem";
      note.innerHTML = e.target.value;
      ul.appendChild(note);

      //close btn
      const closeBtn = document.createElement("span");
      closeBtn.className ="close";
      closeBtn.innerHTML = "x";
      note.appendChild(closeBtn);

    }
  })

  // local storage
  

})

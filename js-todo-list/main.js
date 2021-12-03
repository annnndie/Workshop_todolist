// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#addBtn");
  const task_input = document.querySelector("#input");
  const container = document.querySelector("#container");
  const li = document.querySelector("li");

  //移除功能
  container.addEventListener("click", (e) => {
    console.log(e.target.nodeName);
    if(e.target && e.target.nodeName == "SPAN"){
      e.target.parentNode.remove();
    }
    
    // goal = e.target.parentNode
    // goal.remove();
  })

  // 按 + 新增 to do list
  addBtn.addEventListener("click", (e) => {
    if(e.target && e.target.nodeName == "SPAN" && task_input.value != ""){
      // 新增 to do list
      const note = document.createElement("li");
      note.className = "todoItem";
      note.innerHTML = task_input.value;
      container.appendChild(note);

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
      console.log(e.key);
      const note = document.createElement("li");
      note.className = "todoItem";
      note.innerHTML = e.target.value;
      container.appendChild(note);

      //close btn
      const closeBtn = document.createElement("span");
      closeBtn.className ="close";
      closeBtn.innerHTML = "x";
      note.appendChild(closeBtn);

    }

  })
})

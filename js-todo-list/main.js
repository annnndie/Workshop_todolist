// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#addBtn");
  const text = document.querySelector("#input");
  const container = document.querySelector("#container");
  const close = document.querySelector(".close");

  //移除功能
  container.addEventListener("click", (e) => {
    console.log(e.target.nodeName);
    if(e.target && e.target.nodeName == "SPAN"){
      e.target.parentNode.remove();
    }
    
    // goal = e.target.parentNode
    // goal.remove();
  })
  
  addBtn.addEventListener("click", (e) => {
    // 幫 li 長 class name
    const note = document.querySelector("li");
    note.className = "todoItem";
    container.appendChild(note);


  })
})

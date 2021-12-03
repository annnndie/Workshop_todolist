// TO DO
document.addEventListener("DOMContentLoaded", function(){
  
  // Task_1 點擊任務 list 可以切換 checked class
  const container = document.querySelector('ul');

  container.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === 'LI'){
      const li = e.target
      if ( li.className !== "checked")
      e.target.classList.add("checked")
      else 
      e.target.classList.remove("checked")
    }
    if (e.target && e.target.nodeName == "SPAN") {
      e.target.parentNode.remove();
    }
  }) 
})
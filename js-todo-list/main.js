// TO DO
document.addEventListener("DOMContentLoaded", function(){
  
  // Task_1 點擊任務 list 可以切換 checked class
  const container = document.querySelector('ul');

  container.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI')
    e.target.classList.add("checked")
  }) 
})
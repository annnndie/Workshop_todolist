// TO DO
document.addEventListener("DOMContentLoaded", function(){
  
  // Task_1 點擊任務 list 可以切換 checked class
  const container = document.querySelector('ul');
  const input = document.querySelector('#input');
  const addBtn = document.querySelector('#addBtn');

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

  addBtn.addEventListener("click", () => {
    const inputValue = input.value.trim();
    console.log(inputValue);
    const list = document.createElement('li');
    list.innerHTML = `${ inputValue }<span class=\"close\">x</span>`;
    container.appendChild(list);
    input.value = "";
  })
})
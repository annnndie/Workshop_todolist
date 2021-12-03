// TO DO


document.addEventListener('DOMContentLoaded',(i) => {

  const lis = document.querySelectorAll('li');

  // 按了就刪除或復原
  lis.forEach( li => li.addEventListener('click',() => {
    if( li.className !== "checked")
    {li.className = "checked" }
    else{ li.className = "" }
  })
  )


  // closebtn 有作用
  const closeBtn = document.querySelector('.container')
  
  closeBtn.addEventListener('click',(e) => {
      e.target.parentNode.remove();
    })



});





document.addEventListener("DOMContentLoaded", () => {

  const checkMark = document.querySelectorAll("li");


  checkMark.forEach( (checkMark) => {
    checkMark.addEventListener("click", (e) => {
      e.target.classList.toggle('checked')
    })
 
  })


});
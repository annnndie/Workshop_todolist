document.addEventListener("DOMContentLoaded", () => {

  const checkMark = document.querySelectorAll("li");
  const deleteMark = document.querySelectorAll(".close")


  checkMark.forEach( (checkMark) => {
    checkMark.addEventListener("click", (e) => {
      e.target.classList.toggle('checked')
    })
  })

  deleteMark.forEach( (deleteMark) => {
    deleteMark.addEventListener("click", (e) => {
      e.target.parentNode.remove()
    });
  })


});
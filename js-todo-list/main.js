document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('ul').addEventListener('click', function(event){
    event.target.classList.toggle('checked')
  })
})

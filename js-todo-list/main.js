// TO DO


document.addEventListener('DOMContentLoaded',(i) => {

  const lis = document.querySelectorAll('li');

  lis.forEach( li => li.addEventListener('click',() => {
    if( li.className !== "checked")
    {li.className = "checked" }
    else{ li.className = "" }
  })
  )
});


// TO DO
document.addEventListener("DOMContentLoaded", function(){
  const list_element = document.querySelector("ul")
  list_element.addEventListener('click', (e) => {
    if (e.target.nodeName == "LI"){
      e.target.classList.toggle('checked')
    };
    if (e.target.nodeName == "SPAN"){
      e.target.parentNode.remove()
    }; 
  })
    
  })
  
  //const xbtn = document.querySelector('.addBtn')
  //xbtn.addEventListener("click", (e)=>{
    //console.log(e) //e= the event we listen to
  //})
  //}) 
  
      


//for(var i = 0; i < list_element.length; i++) {
//  const sli = list_element[i]
//  sli.addEventListener('click', ()=> {
//    sli.className ='checked'
//    sli.classList.toggle("")
//  })
//}



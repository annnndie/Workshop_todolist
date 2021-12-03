// TO DO


document.addEventListener('DOMContentLoaded',(i) => {

  
  // 按了就刪除或復原
  const lis = document.querySelectorAll('li');

  lis.forEach( li => li.addEventListener('click',() => {
    if( li.className !== "checked")
    {li.className = "checked" }
    else{ li.className = "" }
  })
  )

  // closebtn 有作用
  const closeBtn = document.querySelector('ul')
  closeBtn.addEventListener('click',(e) => {
  // closebtn 的作用範圍
      if ( e.target.innerText == "x" ){
        e.target.parentNode.remove();
      }
    })

  // 抓到 input 內容  
  
  const unkeydown = document.querySelector('#input')
  const taskList = document.querySelector('.container')
  
  unkeydown.addEventListener('keydown', (e) => {

    // 抓到按下 enter 的時候
    if(e.key === 'Enter' && e.target.value.trim() !== ''){
      // 新增 li
      const el = document.createElement('li')
      taskList.prepend(el)

      // 抓到輸入的值 並 塞進 li
      el.innerText = e.target.value

      e.target.value = ''

    // 將Ｘ生在 那個被塞入的 li
    const closeBtn = document.createElement('span')
    closeBtn.innerText = 'x'
    closeBtn.className = 'close'
    el.appendChild(closeBtn)
    }

    // 新增的 list 也可以取消
    const addLis = document.querySelectorAll('li');
    addLis.forEach( li => li.addEventListener('click',() => {
      if( li.className !== "checked")
      {li.className = "checked" }
      else{ li.className = "" }
    })
    )

  });
  
  // 按＋把值塞入
  const addBtn = document.querySelector('#addBtn')
  const keydown = document.querySelector('#input')

  addBtn.addEventListener('click', () => {
    const el = document.createElement('li')
    el.innerText = keydown.value
    
    // 指定出生位置, 並將 li 實體化
    taskList.prepend(el)

    const closeBtn = document.createElement('span')
    closeBtn.innerText = 'x'
    closeBtn.className = 'close'
    el.appendChild(closeBtn)

    keydown.value = ''
  })
  
  
  
});





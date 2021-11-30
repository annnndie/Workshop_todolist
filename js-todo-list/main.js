// TO DO
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('li').forEach(function (li) {
    li.addEventListener('click', function (e) {
      e.target.classList.toggle('checked')
    })
  })

  document.querySelectorAll('.close').forEach(function (span) {
    span.addEventListener('click', function (e) {
      e.target.parentNode.remove()
    })
  })

  document.querySelector('#addBtn').addEventListener('click', function () {
    document.querySelector("ul").appendChild(createElement());
  })
})

function createElement() {
  let li = document.createElement('li')
  let content = document.querySelector('#input').value
  document.querySelector('#input').value = ''

  let span = document.createElement('span')
  span.appendChild(document.createTextNode('x'))
  span.classList.toggle('close')


  li.appendChild(document.createTextNode(content))
  li.appendChild(span)

  li.addEventListener('click', function (e) {
    e.target.classList.toggle('checked')
  })

  span.addEventListener('click', function (e) {
    e.target.parentNode.remove()
  })

  return li
}

// ========================================================

// document.addEventListener('DOMContentLoaded', function () {
//   let li = document.querySelectorAll('li')

//   for(let i = 0; i < li.length; i++){
//     li[i].addEventListener('click', e => {e.target.classList.toggle('checked')})

//     /* 方法 1 */
//     // li[i].children[0].addEventListener('click', e => e.target.parentNode.remove())
//   }
//   /* 方法 2，直接選 */
//   let close = document.querySelectorAll('.close')
//   for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', e => {e.target.parentNode.remove()})
//   }

//   document.querySelector('#addBtn').addEventListener('click', () => {
//     document.querySelector('ul').insertAdjacentElement('beforeend', createElement())
//    })
// })

// function createElement() {
//   let li = document.createElement('li')
//   let content = document.querySelector('#input').value
//   li.innerText = content
//   li.addEventListener('click', (e) => e.target.classList.toggle('checked'))

//   let span = document.createElement('span')
//   span.classList.add('close')
//   span.innerText = 'x'

//   span.addEventListener('click', (e) => {e.target.parentNode.remove()})
//   li.appendChild(span)

//   return li
// }

// ==============================

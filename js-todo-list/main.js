// checked
document.addEventListener("DOMContentLoaded", () => {
    const checked = document.querySelector('ul');
    checked.addEventListener('click', (e) => {
        if (e.target.nodeName ==='LI') {
        e.target.classList.toggle('checked');
        }
    })
    //remove
    const remove = document.querySelector('ul');
    remove.addEventListener("click", (e) => {
        if (e.target.nodeName === "SPAN") {
        e.target.parentNode.remove();
        }
    });
    //add
    const add = document.querySelector("#addBtn");
    const ul = document.querySelector("ul");

    add.addEventListener("click", e => {

        // get the input values
        let header = e.target.parentElement;
        let todoText = header.children[1].value;
        console.log(todoText)

        //add in li
        let text = document.createElement("li")
        let close = document.createElement("span")
        text.innerHTML = todoText;
        close.innerText = 'x'
        close.className = "close"
        text.append(close);
        ul.append(text);
        ul.insertAdjacentElement("beforebegin", ul)
    })
})


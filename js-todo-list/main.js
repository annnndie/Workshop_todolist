// checked
document.addEventListener("DOMContentLoaded", () => {
    const todo = document.querySelector('ul');
    todo.addEventListener('click', (e) => {
        if (e.target.tagName ='li') {
        e.target.classList.toggle('checked');
        }
    })
})
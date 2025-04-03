const add = document.getElementById("add");
const action = document.querySelector(".action");
const color = document.querySelectorAll(".color");
const noteBox = document.querySelector(".noteBox");

const colors =action.querySelectorall

let dissplay = document.createElement("input")


add.addEventListener('click', () => {
    let div = document.createElement("div")
    let deleteBtn = document.createElement("div")
    deleteBtn.innerText = "x"
    div.classList.add("a")
    deleteBtn.classList.add("b")
    dissplay.classList.add("c")
    deleteBtn.addEventListener('click', () => {
        noteBox.appendChild(div)
    })
    deleteBtn.addEventListener('click', () => {
        noteBox.removeChild(div)
    })
    noteBox.appendChild(div)
    div.appendChild(dissplay)
    div.appendChild(deleteBtn)

})
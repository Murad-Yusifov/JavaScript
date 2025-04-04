const add = document.getElementById("add");
const action = document.querySelector(".action");
const color = document.querySelectorAll(".color");
const noteBox = document.querySelector(".noteBox");

color.forEach(colorDiv => {
    colorDiv.addEventListener("click", () => {
        
    })
}
)

add.addEventListener('click', () => {
    let div = document.createElement("div")
    let deleteBtn = document.createElement("div")
    let dissplay = document.createElement("textarea")
    deleteBtn.innerText = "x"
    div.classList.add("a")
    deleteBtn.classList.add("b")
    dissplay.classList.add("c")
    deleteBtn.addEventListener('click', () => {
        noteBox.removeChild(div)
    })
    noteBox.appendChild(div)
    div.appendChild(dissplay)
    div.appendChild(deleteBtn)

})


// const add = document.getElementById("add");
// const action = document.querySelector(".action");
// const colors = document.querySelectorAll(".color");
// const noteBox = document.querySelector(".noteBox");
// let selectedColor = "white";

// colors.array.forEach((colorDiv) => {
//   colorDiv.addEventListener("click", () => {
//     selectedColor = colorDiv.style.backgroundColor;
//   });
// });

// add.addEventListener("click", () => {
//   let div = document.createElement("div");
//   let deleteBtn = createElement("button");
//   let dissplay = document.createElement("input");

//   deleteBtn.innerText = "x";
//   div.classList.add("a");
//   deleteBtn.classList.add("b");
//   dissplay.classList("c");
//   div.style.backgroundColor = selectedColor;

//   deleteBtn.addEventListener("click", () => {
//     div.remove();
//   });
//   div.appendChild(dissplay)
//   div.appendChild(deleteBtn)
//   noteBox.appendChild(div)
// });


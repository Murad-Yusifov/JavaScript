# JavaScript
All JavaScript codes will be added here on this repo


    <div class="action">
        <div class="color" style="background-color: green;"></div>
        <div class="color" style="background-color: yellow;"></div>
    </div>
    <button id="add">Add Note</button>
    <div class="noteBox"></div>

    <script>
        const add = document.getElementById("add");
        const action = document.querySelector(".action");
        const colors = action.querySelectorAll(".color");
        const noteBox = document.querySelector(".noteBox");
        let selectedColor = "white";

        colors.forEach(colorDiv => {
            colorDiv.addEventListener("click", () => {
                selectedColor = colorDiv.style.backgroundColor;
            });
        });

        add.addEventListener('click', () => {
            let div = document.createElement("div");
            let deleteBtn = document.createElement("div");
            let dissplay = document.createElement("input");

            deleteBtn.innerText = "x";
            div.classList.add("a");
            deleteBtn.classList.add("b");
            dissplay.classList.add("c");
            div.style.backgroundColor = selectedColor;

            deleteBtn.addEventListener('click', () => {
                div.remove();
            });

            div.appendChild(dissplay);
            div.appendChild(deleteBtn);
            noteBox.appendChild(div);
        });
    </script>


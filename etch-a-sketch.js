const newGridButton = document.createElement("button");
const gridContainer = document.querySelector(".container");
newGridButton.textContent = "New Grid (1-100)";
document.body.prepend(newGridButton);
createGrid();

newGridButton.addEventListener("click", () => {
    newGridSize = parseInt(prompt("Enter a new grid size of 1 to 100:"));
    if (newGridSize && typeof(newGridSize) == "number" && newGridSize > 0 && newGridSize <= 100) {
        createGrid(newGridSize);
    } else {
        alert("Please enter a number between 1 and 100 next time.");
    }
})

function createGrid(gridSize = 16) {
    destroyGrid();
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.id = "row" + (i+1);
        gridRow.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            const gridColumn = document.createElement("div");
            gridColumn.id = "column" + (j+1);
            gridColumn.classList.add("tile");
            let rngRed = Math.random() * 255;
            let rngGreen = Math.random() * 255;
            let rngBlue = Math.random() * 255;
            let darkness = 0;
            gridColumn.addEventListener("mouseover", () => {
                darkness += .1;
                gridColumn.style.background = "rgb("
                + (rngRed * (1-darkness)) + " "
                + (rngGreen * (1-darkness)) + " "
                + (rngBlue * (1-darkness)) + ")";
            })
            gridRow.appendChild(gridColumn);
        }
        gridContainer.appendChild(gridRow);
    }
}

function destroyGrid() {
    if (gridContainer.hasChildNodes()) {
        while (gridContainer.hasChildNodes()) {
            gridContainer.firstChild.remove();
        }
    }
}
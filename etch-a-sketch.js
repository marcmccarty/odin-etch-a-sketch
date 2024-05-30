const gridContainer = document.querySelector(".container");
const gridTile = document.createElement("div");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.id = "row" + (i+1);
        for (let j = 0; j < gridSize; j++) {
            const gridColumn = document.createElement("div");
            gridColumn.id = "column" + (j+1);
            gridRow.appendChild(gridColumn);
        }
        gridContainer.appendChild(gridRow);
    }
}
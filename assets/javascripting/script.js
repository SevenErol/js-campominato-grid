
const gridButton = document.getElementById("grid_generator");

const gridElement = document.querySelector(".game_grid");

const tenRow = 10;

const tenCol = 10;

function generateGrid (rows, cols, grid) {

    for (let i = 0; i < (rows * cols); i++) {

        const singleCell = document.createElement("div");

        singleCell.classList.add("cell");

        grid.appendChild (singleCell);
    }

}

gridButton.addEventListener("click", function() {

    generateGrid (tenRow, tenCol, gridElement);
    
});
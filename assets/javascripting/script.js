
const gridButton = document.getElementById("grid_generator");

const gridElement = document.querySelector(".game_grid");

const tenRow = 10;

const tenCol = 10;

function generateGrid(rows, cols, grid) {

    for (let i = 0; i < (rows * cols); i++) {

        const singleCell = document.createElement("div");

        singleCell.classList.add("cell");

        grid.appendChild(singleCell);

        const thisNumber = i + 1;

        singleCell.innerHTML = thisNumber;
    }

}

gridButton.addEventListener("click", function () {

    generateGrid(tenRow, tenCol, gridElement);

    const everyCell = document.querySelectorAll(".cell");

    function clickableCell (nodeList) {

        for( let i = 0; i < nodeList.length; i++) {

            const thisCell = nodeList[i];
            
            thisCell.addEventListener("click", function () {

                thisCell.classList.toggle("aqua");

                console.log(this);
            })
        }
    }

    clickableCell(everyCell);

});



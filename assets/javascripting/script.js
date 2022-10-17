
const gridButton = document.getElementById("grid_generator");

const gridElement = document.querySelector(".game_grid");

const tenRow = 10;

const tenCol = 10;

const nineRow = 9;

const nineCol = 9;

const sevenRow = 7;

const sevenCol = 7;

const levelsElement = document.getElementById("difficulties");


function generateGridEasy(rows, cols, grid) {

    for (let i = 0; i < (rows * cols); i++) {

        const singleCell = document.createElement("div");

        singleCell.classList.add("cell_10");

        grid.appendChild(singleCell);

        const thisNumber = i + 1;

        singleCell.innerHTML = thisNumber;
    }

}

function generateGridRegular(rows, cols, grid) {

    for (let i = 0; i < (rows * cols); i++) {

        const singleCell = document.createElement("div");

        singleCell.classList.add("cell_9");

        grid.appendChild(singleCell);

        const thisNumber = i + 1;

        singleCell.innerHTML = thisNumber;
    }

}

function generateGridHard(rows, cols, grid) {

    for (let i = 0; i < (rows * cols); i++) {

        const singleCell = document.createElement("div");

        singleCell.classList.add("cell_7");

        grid.appendChild(singleCell);

        const thisNumber = i + 1;

        singleCell.innerHTML = thisNumber;
    }

}

gridButton.addEventListener("click", function () {

    if (levelsElement.value === "easy") {

        generateGridEasy(tenRow, tenCol, gridElement);

        const everyCell = document.querySelectorAll(".cell");

        function clickableCell(nodeList) {

            for (let i = 0; i < nodeList.length; i++) {

                const thisCell = nodeList[i];

                thisCell.addEventListener("click", function () {

                    thisCell.classList.toggle("aqua");

                    console.log(this);
                })
            }
        }

        clickableCell(everyCell);

    } else if (levelsElement.value === "regular") {

        generateGridRegular(nineRow, nineCol, gridElement);

        const everyCell = document.querySelectorAll(".cell");

        function clickableCell(nodeList) {

            for (let i = 0; i < nodeList.length; i++) {

                const thisCell = nodeList[i];

                thisCell.addEventListener("click", function () {

                    thisCell.classList.toggle("aqua");

                    console.log(this);
                })
            }
        }

        clickableCell(everyCell);

    } else if (levelsElement.value === "hard") {

        generateGridHard(sevenRow, sevenCol, gridElement);

        const everyCell = document.querySelectorAll(".cell");

        function clickableCell(nodeList) {

            for (let i = 0; i < nodeList.length; i++) {

                const thisCell = nodeList[i];

                thisCell.addEventListener("click", function () {

                    thisCell.classList.toggle("aqua");

                    console.log(this);
                })
            }
        }

        clickableCell(everyCell);

    }



});



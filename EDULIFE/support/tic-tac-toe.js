document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("ticTacToeBoard");
    const cells = document.querySelectorAll(".tic-tac-toe-cell");
    let currentPlayer = "X";
    let boardState = ["", "", "", "", "", "", "", "", ""];

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            if (boardState[index] === "") {
                boardState[index] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWin()) {
                    alert(`${currentPlayer} wins!`);
                    highlightWinningCells();
                    resetBoard();
                } else if (boardState.every((state) => state !== "")) {
                    alert("It's a draw!");
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    function checkWin() {
        return winningCombinations.some((combination) => {
            return combination.every((index) => boardState[index] === currentPlayer);
        });
    }

    function highlightWinningCells() {
        winningCombinations.forEach((combination) => {
            if (combination.every((index) => boardState[index] === currentPlayer)) {
                combination.forEach((index) => {
                    cells[index].style.backgroundColor = "#90EE90"; // Highlight winning cells
                });
            }
        });
    }

    function resetBoard() {
        setTimeout(() => {
            boardState = ["", "", "", "", "", "", "", "", ""];
            cells.forEach((cell) => {
                cell.textContent = "";
                cell.style.backgroundColor = ""; // Reset cell background color
            });
            currentPlayer = "X";
        }, 2000);
    }
});

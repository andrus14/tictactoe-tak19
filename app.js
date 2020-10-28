let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
 ]

const cellDivs = document.querySelectorAll('.cell')

cellDivs.forEach(el => {
    el.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if ( gameBoard[selectedRow][selectedCol] == '-' ) {
            selectedCell.innerText = 'X'
            gameBoard[selectedRow][selectedCol] = 'X'

            if ( !isGameOver() ) {
                // arvuti käib
                emptyCell = getEmptyCell()
            }
    
            console.log(gameBoard)
        }
    })
})

function getEmptyCell() {

}

function isGameOver() {

    for ( let i = 0; i < 3; i++) {
        if ( gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2] && gameBoard[i][0] != '-' ) {
            return true
        }

        if ( gameBoard[0][i] == gameBoard[1][i] && gameBoard[1][i] == gameBoard[2][i] && gameBoard[0][i] != '-' ) {
            return true
        }
    }
    // kaks diagonaali

    return false
}


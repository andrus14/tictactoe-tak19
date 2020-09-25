let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
 ]

const winningSums = [7, 56, 73, 84, 146, 273, 292, 448]

const cellDivs = document.querySelectorAll('.cell')

cellDivs.forEach(el => {
    el.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if ( gameBoard[selectedRow][selectedCol] == '-' ) {
            selectedCell.innerText = 'X'

            gameBoard[selectedRow][selectedCol] = 'X'

            if ( gameBoard[0][0] == 'X' && gameBoard[0][1] == 'X' && gameBoard[0][2] == 'X' ) {
                console.log('player win')
            }

            if ( gameBoard[1][0] == 'X' && gameBoard[1][1] == 'X' && gameBoard[1][2] == 'X' ) {
                console.log('player win')
            }

            if ( gameBoard[2][0] == 'X' && gameBoard[2][1] == 'X' && gameBoard[2][2] == 'X' ) {
                console.log('player win')
            }
    
            console.log(gameBoard)
        }
    })
});
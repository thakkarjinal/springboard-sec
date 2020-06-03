/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
class Player {
    constructor(color, number) {
        this.color = color;
        this.number = number;
    }
}
class Game {
    constructor(player1, player2, width = 7, height = 6) {
        this.width = width;
        this.height = height;
        this.player1 = player1;
        this.player2 = player2;
        this.currPlayer = player1; // active player: 1 or 2
        this.board = new Array(this.height); // array of rows, each row is array of cells  (board[y][x])
    }

    /** makeBoard: create in-JS board structure:
    *    board = array of rows, each row is array of cells  (board[y][x])
    */
    makeBoard = () => {
    // TODO: set "board" to empty HEIGHT x WIDTH matrix array
        for (let i = 0; i < this.height; i++) {
            this.board[i] = new Array(this.width);
            for (let j = 0; j < this.width; j++)
                this.board[i][j] = null;
        }        
    }

    /** makeHtmlBoard: make HTML table and row of column tops. */

    makeHtmlBoard = () => {
        const htmlBoard = document.getElementById('board')
  
        /** create the top row from where player can select which column to play into*/
        let top = document.createElement("tr");
        top.setAttribute("id", "column-top");

        for (let x = 0; x < this.width; x++) {
            let headCell = document.createElement("td");
            headCell.setAttribute("id", x);
            top.append(headCell);
        }
        htmlBoard.append(top);
  
        // create the UI for board
        for (let y = 0; y < this.height; y++) {
            const row = document.createElement("tr");
            for (let x = 0; x < this.width; x++) {
                const cell = document.createElement("td");
                cell.setAttribute("id", `${y}-${x}`);
                row.append(cell);
            }
            htmlBoard.append(row);
        }
    }
    /** findSpotForCol: given column x, return top empty y (null if filled) */

    findSpotForCol = (x) => {
        let xColumn = [];
        for (let i = 0; i < this.height; i++)
            xColumn.push(this.board[i][x])
        if (xColumn.every( val => val != null)) return -1;
        let spot = xColumn.reverse().findIndex( (val, y) => document.getElementById(`${y}-${x}`).children.length !== 0 )
        return spot == -1 ? 5 : spot - 1;
    }
  
    /** placeInTable: update DOM to place piece into HTML table of board */
  
    placeInTable = (y, x) => {
        // TODO: make a div and insert into correct table cell
        let piece = document.createElement('div');
        let grid = document.getElementById(`${y}-${x}`);
        piece.classList.add('piece');
        piece.style.background = this.currPlayer.color;
        grid.append(piece);
    }
  
    /** endGame: announce game end */
  
    endGame = (msg) => {
        setTimeout(() => {
            alert(msg)
        }, 300);
        let top = document.getElementById('column-top');
        top.removeEventListener('click', handleClick);     
    }
    
    switchPlayer = () => {
        this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1;
    }
    /** checkForWin: check board cell-by-cell for "does a win start here?" */
  
    checkForWin = () => {
       let _win = (cells) => {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer
  
            return cells.every(
                ([y, x]) =>
                y >= 0 &&
                y < this.height &&
                x >= 0 &&
                x < this.width &&
                this.board[y][x] === this.currPlayer.number
            );
        }
  
    /** Here we are creating array of all the consecutive 4 cells in horizontal, vertical and 2 diagonal directions.
     * In _win, we check that all 4 cells belong to same player and we check this in all 4 directions. If they are of 
     * same color, we return true.
     */
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}

let player1 = new Player('orange', 1);
let player2 = new Player('teal', 2);
let game = new Game(player1, player2);
game.makeBoard();
game.makeHtmlBoard();

const handleClick = (evt) => {
    // get x from ID of clicked cell
    const x = +evt.target.id;

    // get next spot in column (if none, ignore click)
    const y = game.findSpotForCol(x);
    if (y === -1) {
        return;
    }

    // place piece in board and add to HTML table
    // TODO: add line to update in-memory board
    game.placeInTable(y, x);
    game.board[y][x] = game.currPlayer.number;

    // check for win
    if (game.checkForWin()) {
        return game.endGame(`Player ${game.currPlayer.color} won!`);
    }

    // check for tie
    let tie = game.board.every ( y => {
        return y.every( x => x != null)
    })
    
    if (tie) {
        alert("It is a tie!");
    }
    
    game.switchPlayer();
}

let topElement = document.getElementById('column-top');
topElement.addEventListener('click', handleClick);   
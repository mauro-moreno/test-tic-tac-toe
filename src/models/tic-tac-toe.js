const Grid = require('./grid');

const PLAYERS_SYMBOLS = ['X', 'O'];

const isComplete = (cells) => {
  const distinct = Array.from(new Set(cells));
  return distinct.length === 1 && distinct[0] !== '-' ? distinct[0] : false;
};

const getWinner = (rows) => {
  const rowComplete = rows.map((row) => isComplete(row));
  const winner = rowComplete.filter((result) => !!result);
  return winner.length > 0 ? winner[0] : undefined;
};

function TicTacToe(data) {

  this.id = data.id;
  this.grid = new Grid(data.grid);
  this.lastPlayer = data.lastPlayer;
  this.winner = data.winner;
  this.gameOver = data.gameOver;

  const isGridComplete = () => {
    const completedRows = this.grid.getRows().filter((row) => {
      const usedCells = row.filter((cell) => cell !== '-');
      return usedCells.length === row.length;
    });
    return completedRows.length === this.grid.getRows().length;
  };

  const updateStatus = () => {
    this.winner = getWinner(this.grid.getRows())
      || getWinner(this.grid.getColumns())
      || getWinner(this.grid.getDiagonals());

    this.gameOver = !!this.winner || isGridComplete();
  };

  const isPlayerTurn = (playerSymbol) => this.getCurrentPlayerSymbol() === playerSymbol;

  const isValidMove = (coordinates) => this.grid.get(coordinates) === '-';

  this.toJSON = function () {
    return { ...this, grid: this.grid.getRows(), winner: this.winner ? this.winner : 'draw' };
  };

  this.getCurrentPlayerSymbol = function () {
    const lastPlayerSymbolIndex = PLAYERS_SYMBOLS.indexOf(this.lastPlayer);
    return PLAYERS_SYMBOLS[(lastPlayerSymbolIndex + 1) % 2];
  };

  this.move = function (playerSymbol, coordinates) {
    if (!isPlayerTurn(playerSymbol)) {
      throw new Error('It is not your turn to play');
    } else if (!isValidMove(coordinates)) {
      throw new Error('Invalid move');
    } else {
      this.grid.set(coordinates, playerSymbol);
      this.lastPlayer = playerSymbol;
      updateStatus();
    }
  };

}

module.exports = TicTacToe;

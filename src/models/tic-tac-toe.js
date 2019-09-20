const Grid = require('./grid');

function TicTacToe(data) {

  this.id = data.id;
  this.grid = new Grid(data.grid);
  this.lastPlayer = data.lastPlayer;
  this.winner = data.winner;
  this.gameOver = data.gameOver;

  this.toJSON = function () {
    return { ...this, grid: this.grid.getRows() };
  };

}

module.exports = TicTacToe;

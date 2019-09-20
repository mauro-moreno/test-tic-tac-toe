function Grid(data) {

  const rows = data;

  this.getRows = function () {
    return [].concat(rows);
  };

  this.getColumns = function () {
    return Object.keys(rows[0]).map((column) => rows.map((row) => row[column]));
  };

  this.set = function ({ x, y }, symbol) {
    rows[y][x] = symbol;
  };

  this.getDiagonals = function () {
    const diagonals = [];
    diagonals.push(rows.map((element, index) => rows[index][index]));
    diagonals.push(
      rows.map((element, index) => rows[index][rows.length - index - 1]),
    );
    return diagonals;
  };

}

module.exports = Grid;

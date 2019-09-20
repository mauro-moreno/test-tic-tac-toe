function Grid(data) {

  const rows = data;

  this.getRows = function () {
    return [].concat(rows);
  };

}

module.exports = Grid;

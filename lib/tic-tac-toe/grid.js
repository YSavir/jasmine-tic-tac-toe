var Cell = require(GLOBAL.rootPath + 'lib/tic-tac-toe/cell.js');

var Grid = function(){
  var x = 1;
  this.cells = [];

  for(; x < 4; x++){
    var y = 1;
    for(; y < 4; y++){
      this.cells.push(new Cell(x, y))
    }
  }
};


Grid.prototype.cell = function(x, y){
  matchingCells = this.cells.filter(function(cell){
    return cell.x === x && cell.y === y;
  });
  
  return matchingCells[0];
};


module.exports = Grid;

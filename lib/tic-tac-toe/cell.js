var Cell = function(x, y){
  this.x = x;
  this.y = y;
  this.value = null;
};

Cell.prototype.coordinates = function(){
  return [this.x, this.y];
};

module.exports = Cell;

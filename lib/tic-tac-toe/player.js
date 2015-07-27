var Player = function(opts){
  opts = opts || {};

  this.human = opts.human || false;
  this.symbol = opts.symbol;
};

module.exports = Player;

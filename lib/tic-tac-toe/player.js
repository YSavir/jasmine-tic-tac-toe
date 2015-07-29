var Player = function(opts){
  opts = opts || {};
  var validHumanOptions = [true, false];
  this.human = opts.human || false;

  if (typeof this.human !== 'boolean'){
    throw new Error("Human option must be boolean");
  }

  this.symbol = opts.symbol;
};

module.exports = Player;

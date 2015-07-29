var Interface = require(GLOBAL.rootPath + 'lib/tic-tac-toe/interface.js'),
    Grid = require(GLOBAL.rootPath + 'lib/tic-tac-toe/grid.js');

var Game = function(){
  this.interface = new Interface();
  this.players = [];
  this.completed = false;
  this.grid = new Grid();
};

Game.prototype.getPlayerDetails = function(){
  this.interface.isPlayerHuman();
  this.interface.pickSymbol();
};


module.exports = Game;

var GameInterface = require(GLOBAL.rootPath + 'lib/tic-tac-toe/interfaces/game.js');
var Grid = require(GLOBAL.rootPath + 'lib/tic-tac-toe/grid.js');

var Game = function(){
  this.interface = new GameInterface();
  this.players = [];
  this.completed = false;
  this.grid = new Grid();
};

Game.prototype.getPlayerDetails = function(){
  this.interface.isPlayerHuman();
  this.interface.pickSymbol();
};


module.exports = Game;

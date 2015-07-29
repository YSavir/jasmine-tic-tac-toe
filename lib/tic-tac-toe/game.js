var path = require('path'),
    tttPath = path.join(GLOBAL.rootPath + 'lib/tic-tac-toe/');
    Interface = require(path.join(tttPath, 'interface.js')),
    Grid = require(path.join(tttPath, 'grid.js')),
    Player = require(path.join(tttPath, 'player.js'));

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

Game.prototype.addPlayer = function(human, symbol){
  var player = new Player({human: human, symbol: symbol});
  this.players.push(player);
};

module.exports = Game;

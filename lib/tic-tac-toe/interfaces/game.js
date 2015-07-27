var Game = function(){};

Game.prototype.greeting = function(){
  return "Welcome to Tic Tac Toe";
};

Game.prototype.totalPlayers = function(){
  return "How many players will be playing?";
};

module.exports = Game;


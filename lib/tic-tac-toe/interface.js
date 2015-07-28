var Game = function(){};

Game.prototype.greeting = function(){
  return "Welcome to Tic Tac Toe";
};

Game.prototype.totalPlayers = function(){
  return "How many players will be playing?";
};

Game.prototype.isPlayerHuman = function(){
  return 'Is this player human?';
}

Game.prototype.pickSymbol = function(){
  return 'What symbol will this player use?';
};

module.exports = Game;


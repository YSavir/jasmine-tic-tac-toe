var prompt = require('prompt');

var path = require('path'),
    tttPath = path.join(GLOBAL.rootPath + 'lib/tic-tac-toe/');
    Interface = require(path.join(tttPath, 'interface.js')),
    Grid = require(path.join(tttPath, 'grid.js')),
    Player = require(path.join(tttPath, 'player.js'));

var convertToBoolean = function(response){
  var yesResponses = ['y', 'yes'];
  var noResponses = ['n', 'no'];
  if (yesResponses.indexOf(response) !== -1 ){
    return true;
  } else if ( noResponses.indexOf(response) !== -1 ) {
    return false; 
  } else {
    throw new Error("response is not valid");
  }
}

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

Game.prototype.addPlayerThroughConsole = function(){
  var schema = {
    properties: {
      human: {
        pattern: /y[es]*|n[o]?/,
        message: this.interface.isPlayerHuman(),
        require: true
      },
      symbol: {
        message: this.interface.pickSymbol(),
        required: true
      }
    }
  };

  prompt.start();
  console.log('');
  console.log('Waiting for response');
  prompt.get(schema, function(err, result){
    console.log('hi');
    // if (err) { console.log(err)};
    console.log('');
    console.log("Result is: ", result);
    this.players.push(new Player({human: true, symbol: 'X'}));
  }.bind(this));
};


module.exports = Game;

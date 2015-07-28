var Factory = require(GLOBAL.rootPath + 'spec/config/factories/factory.js'),
    Player = require(GLOBAL.rootPath + 'lib/tic-tac-toe/player.js');

var playerFactory = new Factory('player', Player);

module.exports = [playerFactory];

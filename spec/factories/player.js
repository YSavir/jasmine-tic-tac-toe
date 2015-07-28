var Factory = require('./assembler.js'),
    Player = require(GLOBAL.rootPath + 'lib/tic-tac-toe/player.js');

var playerFactory = new Factory('player', Player);

module.exports = [playerFactory];

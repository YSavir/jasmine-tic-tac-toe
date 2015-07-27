var TicTacToe = {}

var tttRoot = GLOBAL.rootPath + 'lib/tic-tac-toe/';


TicTacToe.Cell = require(tttRoot + 'cell.js');
TicTacToe.Grid = require(tttRoot + 'grid.js');
TicTacToe.Interfaces = require(tttRoot + 'interface.js');

console.log('');
console.log(TicTacToe);

module.exports = TicTacToe;

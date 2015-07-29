var Factory = require(GLOBAL.rootPath + 'spec/config/factories/factory.js'),
    Cell = require(GLOBAL.rootPath + 'lib/tic-tac-toe/cell.js');

var cellFactory = new Factory('Cell', Cell);

module.exports = [cellFactory];

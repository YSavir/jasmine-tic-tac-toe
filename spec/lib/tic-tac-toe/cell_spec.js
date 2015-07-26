var path = require('path'),
    TicTacToe = require(path.normalize(GLOBAL.rootPath + 'lib/tic-tac-toe.js'));

describe('TicTacToe.Cell', function(){
  describe('.coordinates', function(){
    it('should return the cell\'s coordinates', function(){
      var cell = new TicTacToe.Cell(1, 1);

      expect(cell.coordinates()).toBe([1, 2]);
    });
  });
});

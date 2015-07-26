var path = require('path'),
    TicTacToe = require(path.normalize(GLOBAL.rootPath + 'lib/tic-tac-toe.js'));

describe('TicTacToe.Cell', function(){
  describe('.coordinates', function(){
    it('should return the cell\'s coordinates', function(){
      var cell1 = new TicTacToe.Cell(1, 1);
      var cell2 = new TicTacToe.Cell(2, 1);

      expect(cell1.coordinates()).toEqual([1, 1]);
      expect(cell2.coordinates()).toEqual([2, 1]);
    });
  });
});

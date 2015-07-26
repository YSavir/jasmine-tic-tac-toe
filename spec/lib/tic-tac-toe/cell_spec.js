var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

describe('TicTacToe.Cell', function(){
  it('should initialize with no value', function(){
    var cell = new TicTacToe.Cell(1, 1);
  
    expect(cell.value).toBe(null);
  });

  describe('.coordinates', function(){
    it('should return the cell\'s coordinates', function(){
      var cell1 = new TicTacToe.Cell(1, 1);
      var cell2 = new TicTacToe.Cell(2, 1);

      expect(cell1.coordinates()).toEqual([1, 1]);
      expect(cell2.coordinates()).toEqual([2, 1]);
    });
  });

  describe('.value', function(){
    it('should return the cell\'s value', function(){
      var cell = new TicTacToe.Cell(1, 1);
      cell.value = 'x';

      expect(cell.value).toEqual('x');
    });
  });
});

var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

describe('TicTacToe.Grid', function(){
  describe('When initialized', function(){
    it('should initialize with 9 cells', function(){
      var grid = new TicTacToe.Grid();

      expect(grid.cells.length).toBe(9);
    });

    it('should initialize with correct cells', function(){
      var grid = new TicTacToe.Grid();
      var cellCoordinates = grid.cells.map(function(cell){
        return cell.coordinates();
      });
      var expectedCoordinates = [[1, 1], [1, 2], [1, 3],
                                 [2, 1], [2, 2], [2, 3],
                                 [3, 1], [3, 2], [3, 3]];

      expect(cellCoordinates).toEqual(expectedCoordinates);
    });
  });

  describe('.cell()', function(){
    it('should return the requested cell', function(){
      var grid = new TicTacToe.Grid();
      var cell1 = new TicTacToe.Cell(1, 1);
      var cell2 = new TicTacToe.Cell(2, 2);

      expect(grid.cell(1, 1)).toEqual(cell1);
      expect(grid.cell(2, 2)).toEqual(cell2);
    });
  });

  describe('.cellsWithValues', function(){
    describe('Given a grid with 2 cells with values', function(){
      it('should return the 2 cells with values', function(){
        var grid = new TicTacToe.Grid(),
            cell1 = grid.cell(1, 1),
            cell2 = grid.cell(2, 2);
        cell1.value = 'X';
        cell2.value = 'X';

        expect(grid.cellsWithValues()).toEqual([cell1, cell2]);
      });
    });

    describe('Given a grid with 3 cells with values', function(){
      it('should return the 3 cells with values', function(){
        var grid = new TicTacToe.Grid(),
            cell1 = grid.cell(1, 1),
            cell2 = grid.cell(2, 2),
            cell3 = grid.cell(3, 3);
        cell1.value = 'X';
        cell2.value = 'X';
        cell3.value = 'X';

        expect(grid.cellsWithValues()).toEqual([cell1, cell2, cell3]);
      }); 
    });
  });
});


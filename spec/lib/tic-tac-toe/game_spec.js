var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

describe('TicTacToe.Game', function(){
  describe('When initialized', function(){
    it('should have a game interface', function(){
      var game = new TicTacToe.Game();

      expect(game.interface.constructor).toBe(TicTacToe.Interfaces.Game);
    });

    it('should have an array of players', function(){
      var game = new TicTacToe.Game();

      expect(Array.isArray(game.players)).toBeTruthy();
    });

    it('should not be complete', function(){
      var game = new TicTacToe.Game();

      expect(game.completed).toBe(false);
    });

    it('should have a grid', function(){
      var game = new TicTacToe.Game();

      expect(game.grid.constructor).toBe(TicTacToe.Grid);
    });
  });
});

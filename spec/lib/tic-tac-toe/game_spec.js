var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

describe('TicTacToe.Game', function(){
  var game;

  beforeEach(function(){
    game = new TicTacToe.Game();
  });
  
  describe('When initialized', function(){
    it('should have a game interface', function(){
      expect(game.interface.constructor).toBe(TicTacToe.Interfaces.Game);
    });

    it('should have an array of players', function(){
      expect(Array.isArray(game.players)).toBe(true);
    });

    it('should not be complete', function(){
      expect(game.completed).toBe(false);
    });

    it('should have a grid', function(){
      expect(game.grid.constructor).toBe(TicTacToe.Grid);
    });
  });

  describe('.getPlayerDetails', function(){
    it('should ask if the player will be human', function(){
      spyOn(game.interface, 'isPlayerHuman');
      game.getPlayerDetails();

      expect(game.interface.isPlayerHuman).toHaveBeenCalled();
    });

    describe('and the player is human', function(){
      it('should ask what symbol the player will use', function(){
        spyOn(game.interface, 'pickSymbol');
        game.getPlayerDetails();

        expect(game.interface.pickSymbol).toHaveBeenCalled();
      });
    });
  });

  describe('.addPlayer', function(){
    it('should add a new player', function(){
      var game = new TicTacToe.Game();

    });
  });
});

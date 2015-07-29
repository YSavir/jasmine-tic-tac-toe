var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js'),
    helpers = require(GLOBAL.rootPath + 'spec/helpers/input_helpers.js');

describe('TicTacToe.Game', function(){
  describe('When initialized', function(){
    it('should have a game interface', function(){
      var game = new TicTacToe.Game();

      expect(game.interface.constructor).toBe(TicTacToe.Interface);
    });

    it('should have an array of players', function(){
      var game = new TicTacToe.Game();

      expect(Array.isArray(game.players)).toBe(true);
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

  describe('.getPlayerDetails', function(){
    it('should ask if the player will be human', function(){
      var game = new TicTacToe.Game();
      spyOn(game.interface, 'isPlayerHuman');
      game.getPlayerDetails();

      expect(game.interface.isPlayerHuman).toHaveBeenCalled();
    });

    describe('and the player is human', function(){
      it('should ask what symbol the player will use', function(){
        var game = new TicTacToe.Game();
        spyOn(game.interface, 'pickSymbol');
        game.getPlayerDetails();

        expect(game.interface.pickSymbol).toHaveBeenCalled();
      });
    });
  });

  describe('.addPlayerThroughConsole', function(){
    // Hijack stdin so that we can fabricate console inputs
    var originalStdin;
    beforeAll(function(){
      // originalStdin = process.stdin;
      // process.setMaxListeners(0);
    });

    afterEach(function(){
      // process.stdin = originalStdin;
    });

    it('should add a player through console input', function(){
      // ***************
      // NOTE: Return to test computer player symbols once computer players
      // are able to choose their own symbol
      // ***************
      var game = new TicTacToe.Game(),
          playerDetails = function(player) {
            return [player.human, player.symbol];
          };

      helpers.setInput(['yes', 'X']);
      game.addPlayerThroughConsole();
      helpers.setInput(['yes', 'O']);
      game.addPlayerThroughConsole();
       
      expect(playerDetails(game.players[0])).toEqual([true, 'X']);
      expect(playerDetails(game.players[1])).toEqual([true, 'O']);
    });
  });

  describe('.addPlayer', function(){
    it('should add a new player', function(){
      var game = new TicTacToe.Game(),
          playerDetails = function(player) {
            return [player.human, player.symbol];
          };

      game.addPlayer(true, 'X');
      game.addPlayer(false, 'O');

      expect(playerDetails(game.players[0])).toEqual([true, 'X']);
      expect(playerDetails(game.players[1])).toEqual([false, 'O']);
    });
  });
});

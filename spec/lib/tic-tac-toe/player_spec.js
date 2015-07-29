var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

describe('TicTacToe.Player()', function(){
  describe('When initialized', function(){
    describe('as a human player', function(){
      it('should be human', function(){
        var player = new TicTacToe.Player({human: true});

        expect(player.human).toBe(true);
      });
    });

    describe('with no human option', function(){
      it('should not be human', function(){
        var player = new TicTacToe.Player();

        expect(player.human).toBe(false);
      });
    });

    describe('with an invalid human option', function(){
      it('should raise an error', function(){
        var functionToError = function(){
          new TicTacToe.Player({human: 'foo'});
        }

        expect(functionToError).toThrow(new Error("Human option must be boolean"));
      });
    });

    describe('with \'X\' as a symbol', function(){
      it('should have \'X\' as a symbol', function(){
        var player = new TicTacToe.Player({symbol: 'X'});

        expect(player.symbol).toBe('X');
      });
    });

    describe('with \'O\' as a symbol', function(){
      it('should have \'O\' as a symbol', function(){
        var player = new TicTacToe.Player({symbol: 'O'});

        expect(player.symbol).toBe('O');
      });
    });
  });
});

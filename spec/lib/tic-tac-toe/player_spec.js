var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

describe('TicTacToe.Player()', function(){
  describe('When initialized', function(){
    describe('as a computer player', function(){
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

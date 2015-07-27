var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

describe('TicTacToe.Interfaces.Game', function(){
  describe('.greeting', function(){
    it('should welcome the player(s)', function(){
      var interface = new TicTacToe.Interfaces.Game();

      expect(typeof interface.greeting()).toBe('string');
    });
  });
});

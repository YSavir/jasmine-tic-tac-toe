var TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

// Tests validate that the output is a string
// String contents are not checked to avoid needing a test update
// with each update of the content
// Exact content can be tested via integration tests

describe('TicTacToe.Interfaces.Game', function(){
  describe('.greeting', function(){
    it('should welcome the player(s)', function(){
      var interface = new TicTacToe.Interfaces.Game();

      expect(typeof interface.greeting()).toBe('string');
    });
  });

  describe('.totalPlayers', function(){
    it('should ask how many players will play', function(){
      var interface = new TicTacToe.Interfaces.Game();

      expect(typeof interface.totalPlayers()).toBe('string');
    });
  });
});

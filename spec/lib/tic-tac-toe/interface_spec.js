var Factories = require(GLOBAL.rootPath + 'spec/config/nexus.js');

// Tests validate that the output is a string
// String contents are not checked to avoid needing a test update
// with each update of the content
// Exact content can be tested via integration tests

describe('TicTacToe.Interfaces.Game', function(){
  describe('.greeting', function(){
    it('should welcome the player(s)', function(){
      var interface = Factories.interface.build();

      expect(typeof interface.greeting()).toBe('string');
    });
  });

  describe('.totalPlayers', function(){
    it('should ask how many players will play', function(){
      var interface = Factories.interface.build();

      expect(typeof interface.totalPlayers()).toBe('string');
    });
  });

  describe('.isPlayerHuman', function(){
    it('should ask if the player is human', function(){
      var interface = Factories.interface.build();

      expect(typeof interface.isPlayerHuman()).toBe('string');
    }); 
  });

  describe('.pickSymbol', function(){
    it('should ask the player to pick a symbol', function(){
      var interface = Factories.interface.build();

      expect(typeof interface.pickSymbol()).toBe('string');
    });
  });
});

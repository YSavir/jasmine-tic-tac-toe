var path = require('path'),
    specPath = path.join(GLOBAL.rootPath, 'spec/'),
    typeMatchers = require(specPath + 'helpers/type_helpers.js'),
    TicTacToe = require(GLOBAL.rootPath + 'lib/tic-tac-toe.js');

// Tests validate that the output is a string
// String contents are not checked to avoid needing a test update
// with each update of the content
// Exact content can be tested via integration tests

describe('TicTacToe.Interfaces.Game', function(){
  beforeAll(function(){
    jasmine.addMatchers(typeMatchers);
  });

  describe('.greeting', function(){
   it('shopuld welcome the player(s)', function(){
      var interface = new TicTacToe.Interface();

      expect(interface.greeting()).toBeOfType('string');
    });
  });

  describe('.totalPlayers', function(){
    it('should ask how many players will play', function(){
      var interface = new TicTacToe.Interface();

      expect(interface.totalPlayers()).toBeOfType('string');
    });
  });

  describe('.isPlayerHuman', function(){
    it('should ask if the player is human', function(){
      var interface = new TicTacToe.Interface();

      expect(interface.isPlayerHuman()).toBeOfType('string');
    }); 
  });

  describe('.pickSymbol', function(){
    it('should ask the player to pick a symbol', function(){
      var interface = new TicTacToe.Interface();

      expect(interface.pickSymbol()).toBeOfType('string');
    });
  });
});

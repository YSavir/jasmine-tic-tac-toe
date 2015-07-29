var path = require('path'),
    TicTacToe = require(path.join(GLOBAL.rootPath, 'lib/tic-tac-toe.js'));

// console.log(__dirname);
// console.log(path.join(__dirname, 'spec/config/factories/nexus.js'));
//
var Factories;
// Factories = require('./../../../spec/config/factories/nexus.js')(function(factories){
  // return factories;
// });




describe('TicTacToe.Cell', function(){
  // var Factories;
  beforeAll(function(done){
    facFunc = require('./../../../spec/config/factories/nexus.js');
    facFunc(function(factories){
      Factories = factories;
      done(); 
    });

    console.log("Factories from cell spec: ", Factories);
    // console.log('hi');
  });
  it('should initialize with no value', function(done){
    done();
    var cell = new TicTacToe.Cell(1, 1);
    console.log("Factories in it block: ", Factories);
  
    expect(cell.value).toBeNull();
  });

  describe('.coordinates', function(){
    it('should return the cell\'s coordinates', function(){
      var cell1 = Factories.Cell.build(1, 1),
          cell2 = Factories.Cell.build(2, 1);
      // var cell1 = new TicTacToe.Cell(1, 1);
      // var cell2 = new TicTacToe.Cell(2, 1);

      expect(cell1.coordinates()).toEqual([1, 1]);
      expect(cell2.coordinates()).toEqual([2, 1]);
    });
  });

  describe('.value', function(){
    it('should return the cell\'s value', function(){
      var cell = new TicTacToe.Cell(1, 1);
      cell.value = 'x';

      expect(cell.value).toEqual('x');
    });
  });
});


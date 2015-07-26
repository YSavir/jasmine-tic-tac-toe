var App = require('../lib/app.js');

describe('A', function(){
  it('should have the name \'boo\'', function(){
    expect( new App.Boo().name ).toBe('boo');
  });
});

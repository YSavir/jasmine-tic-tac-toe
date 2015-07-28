var path = require('path'),
    factoriesPath = path.normalize(GLOBAL.rootPath + 'spec/factories/'),
    factories = {};

var addFactoryFromFile = function(file){
  var filePath = path.join(factoriesPath, file);

  // register each factory according to its name
  require(filePath).forEach(function(factory){
    factories[factory.name] = factory;
  });
};

require('fs').readdirSync(factoriesPath).forEach(function(file){
  addFactoryFromFile(file);
});

module.exports = factories;

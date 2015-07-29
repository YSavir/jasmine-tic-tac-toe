var path = require('path'),
    Promise = require('promise'),
    recursiveDir = require('recursive-readdir'),
    factoriesPath = path.join(GLOBAL.rootPath, 'spec/factories/'),
    factories = {};


var addFactoryFromFile = function(file){
  // register each factory according to its name
  var fileFactories = require(file);
  if ( Array.isArray(fileFactories) ) {
    require(file).forEach(function(factory){
      factories[factory.name] = factory;
    });
  };
};

module.exports = function(callback){
  recursiveDir(factoriesPath, function(err, files){
    if (err) { console.log(err); exit(1) }
    files.forEach(function(file){
      addFactoryFromFile(file);
    });
    callback(factories);
  });
}



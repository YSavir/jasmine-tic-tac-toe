var requireDir = require('require-dir');
var path = require('path');

GLOBAL.rootPath = path.normalize(__dirname + '/');

process.on('uncaughtException', function(err){
  console.log(err);
  process.exit(1);
});

requireDir('./build/tasks', {recurse: true});

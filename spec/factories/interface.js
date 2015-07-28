var Factory = require(GLOBAL.rootPath + 'spec/config/factories/factory.js'),
    Interface = require(GLOBAL.rootPath + 'lib/tic-tac-toe/interface.js');

var interfaceFactory = new Factory('interface', Interface);

module.exports = [interfaceFactory];

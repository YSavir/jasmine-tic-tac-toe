var helpers = {},
    stream = require('stream');

helpers.setInput = function(input){
  var inputStream = new stream.Readable();

  // inputStream.read = function noop(){};

  inputStream.push(input.join('\n'));
  // inputStream.push(null);
  // inputStream.pipe(process.stdin);

  // process.stdin = inputStream;
  // process.stdin.on('pipe', function(src){
    // console.log('stdin is being piped to');
    // return input;
  // });
  //
  process.stdin.pipe(inputStream);
}

module.exports = helpers;

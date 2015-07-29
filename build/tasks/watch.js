var gulp = require('gulp'),
    watch = require('gulp-watch'),
    path = require('path'),
    jasmine = require('gulp-jasmine'),
    root = GLOBAL.rootPath, 
    specPath = path.normalize(root + '/spec/');

var specPathFromLibPath = function(libFile){
  var relativeFilePath = libFile.replace(root, ''),
      specFilePath = path.join(specPath, relativeFilePath);

  return specFilePath.replace('.js', '_spec.js'); 
}

var testFile = function(file){
  gulp.src(file)
    .pipe(jasmine({verbose: true, includeStackTrace: true}))
    .on('error', swallowError);
}

var swallowError = function(error){
  console.log(error);
  this.emit('end');
};

var clearScreen = function(){
  process.stdout.write("\u001b[2J\u001b[0;0H");
}

gulp.task('watch-tests', function(){
  // debounce so that Vim doesn't double trigger test with .swp file
  gulp.watch('lib/**/*.js', {debounceDelay: 2000}, function(event){
    clearScreen();
    var specFilePath = specPathFromLibPath(event.path);
    testFile(specFilePath);
  });

  gulp.watch('spec/**/*.js', {deboucneDelay: 2000}, function(event){
    clearScreen();
    testFile(event.path);
  });
})

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    path = require('path'),
    jasmine = require('gulp-jasmine');

var root = path.normalize(__dirname + '../../..'),
    specPath = path.normalize(root + '/spec'),
    libPath = path.normalize(root + '/lib');

var specPathFromLibPath = function(libFile){
  var relativeFilePath = libFile.replace(libPath, '');
  var specFilePath =  path.normalize(specPath + relativeFilePath);
  return specFilePath.replace('.js', '_spec.js'); 
}

gulp.task('watch-tests', function(){
  var i = 0
  gulp.watch('lib/**/*.js', {debounceDelay: 2000}, function(event){
    var specFilePath = specPathFromLibPath(event.path);
    gulp.src(specFilePath)
      .pipe(jasmine({verbose: true}));
  });
})

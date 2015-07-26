var gulp = require('gulp'),
    argv = require('yargs').argv,
    jasmine = require('gulp-jasmine');


gulp.task('jasmine', function(){
  var specFile = argv.file;
  gulp.src(GLOBAL.rootPath + specFile)
    .pipe(jasmine({includeStackTrace: true, verbose: true}));
});

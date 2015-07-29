var gulp = require('gulp'),
    argv = require('yargs').argv,
    jasmine = require('gulp-jasmine');

gulp.task('jasmine', function(){
  var mute = argv.mute !== true,
      noStackTrace = argv.noStackTrace !== true,
      target = argv.all ?
        'spec/**/*_spec.js' :
        GLOBAL.rootPath + argv.file;
  gulp.src(target)
    .pipe(jasmine({verbose: mute, includeStackTrace: noStackTrace}));
});

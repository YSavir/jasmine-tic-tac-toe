var gulp = require('gulp'),
    jasmine = require('gulp-jasmine');

gulp.task('watch-tests', function(){
  return gulp.src('spec/**/*.js')
    .pipe(jasmine());
});

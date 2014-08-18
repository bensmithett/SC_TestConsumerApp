var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src(['./node_modules/SC_base/dist/index.css', './node_modules/SC_TestComponent/dist/index.css'])
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./app/assets/stylesheets'));
});

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var imageop = require('gulp-image-optimization');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {
    gulp.src('dev/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));

    gulp.src('dev/img/**')
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('img'));

    gulp.src('dev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));

    gulp.src('dev/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./'));

    gulp.src('dev/font-awesome/**')
      .pipe(gulp.dest('build/font-awesome'));

    gulp.src('dev/fonts/**')
        .pipe(gulp.dest('fonts'));

});

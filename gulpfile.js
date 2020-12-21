const 
    gulp = require('gulp'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch');
 
gulp.task('stream', function () {
    return gulp.src('./pug/*.pug')
        .pipe(watch('./pug/*.pug'))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
});
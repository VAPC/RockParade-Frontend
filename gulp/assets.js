var gulp = require('gulp');

gulp.task('copy:assets', () => {
    gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});
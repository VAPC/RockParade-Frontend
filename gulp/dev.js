var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('run-sequence');
var server = require('./lib/server');
var reload = server.reload;


gulp.task('dev',  () => {
    run(['copy:html', 'copy:assets', 'script', 'server', 'test:tdd', 'style:watch']);
    watch(['src/**/*.ts'],  () => {
        run(['script', 'test:script'], (err) => !err && reload());
    });
    watch(['test/**/*.ts'],  () => {
        run(['test:script']);
    });
});

gulp.task('server',  () => {
    return server([
        './dist'
    ], {
        port: 3000
    });
});

gulp.task('copy:html', () => {
    gulp.src('./index/index.html')
        .pipe(gulp.dest('./dist'));
});
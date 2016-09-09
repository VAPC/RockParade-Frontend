var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('run-sequence');
var server = require('./lib/server');
var reload = server.reload;


gulp.task('dev', [
        'copy:html',
    'copy:assets',
        'script',
        'server',
        'style:watch',
        'test:script'
    ],
    () => {
        run(['test:tdd']);
        watch(['src/**/*.ts'], () => {
            run(['test:script']);
            run(['script'], (err) => !err && reload());
        });
        watch(['test/**/*.ts'], () => {
            run(['test:script']);
        });
    });

gulp.task('server', () => {
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
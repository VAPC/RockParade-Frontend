var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('run-sequence');
var server = require('./lib/server');
var reload = server.reload;


gulp.task('dev', function () {
    run(['script', 'server', 'test:tdd', 'style:watch']);
    watch(['app/**/*.ts'], function () {
        run(['script', 'test:script'], (err) => !err && reload());
    });
    watch(['test/**/*.ts'], function () {
        run(['test:script']);
    });
});

gulp.task('server', function () {
    return server([
        '../../web'
    ], {
        port: 3000
    });
});
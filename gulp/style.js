const readFile = require('fs').readFileSync;
const reload = require('./lib/server').reload;
const run = require('run-sequence');
const gulp = require('gulp');
const watch = require('gulp-watch');
const remember = require('gulp-remember');
const cached = require('gulp-cached');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const simpleVars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const inlineSvg = require('postcss-inline-svg');

gulp.task('style', () => {
    return gulp.src('app/**/*.scss')
        .pipe(cached('style'))
        .pipe(sourcemaps.init())
        .pipe(postcss([
            simpleVars({
                variables: JSON.parse(readFile('app/constants.json', 'utf8'))
            }),
            nested,
            inlineSvg
        ]))
        .pipe(remember('style'))
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../../web'));
});

gulp.task('style:watch', ['style'], () => {
    watch(['app/**/*.scss'], (file) => {
        delete cached.caches.style[file.path];
        remember.forget('style', file.path);
        run('style', (err) => !err && reload());
    });
    watch(['app/variables.json'], () => {
        delete cached.caches.style;
        remember.forgetAll('style');
        run('style', (err) => !err && reload());
    })
});
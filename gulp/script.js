var gulp = require('gulp');
var rollup = require('rollup').rollup;
var typescript = require('rollup-plugin-typescript');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfigTypeChecking.json', {noExternalResolve: true});
const globals = require('./globals.json');

gulp.task('script', () => {
    return rollup({
        entry: 'src/bootstrap.ts',
        plugins: [
            typescript()
        ],
        external: Object.keys(globals)
    }).then((bundle)=> {
        return bundle.write({
            globals,
            format: 'iife',
            dest: './dist/app.js',
            sourceMap: 'inline'
        });
    });
});

gulp.task('script:typechecking', (done) => {
    return gulp.src([
        "src/**/*.ts",
        "includes/**/*.ts"
    ])
        .pipe(ts(tsProject));
});
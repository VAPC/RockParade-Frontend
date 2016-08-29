var gulp = require('gulp');
var Server = require('karma').Server;
var rollup = require('rollup').rollup;
var typescript = require('rollup-plugin-typescript');
var multiEntry = require('rollup-plugin-multi-entry');
var PluginError = require('gulp-util').PluginError;
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfigTypeChecking.json', {noExternalResolve : true});

gulp.task('test:tdd', function (done) {
    new Server({
        configFile: require('path').resolve('karma.conf.js')
    }, done).start();
});

var rollupBundle = null;

const globals = {
    '@angular/core': 'ng.core',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic'
};

gulp.task('test:script', function () {
    return rollup({
        entry: 'test/**/*.ts',
        external: Object.keys(globals),
        cache: rollupBundle,
        plugins: [
            multiEntry({exports: false}),
            // tslint({ throwError: true, include: 'src/**' }),
            typescript()
        ],
        onwarn: function (msg) {
            throw Error(msg);
        }
    }).then(function (bundle) {
        return bundle.write({
            globals,
            format: 'iife',
            dest: 'test/tmp/test.js',
            sourceMap: 'inline'
        });
    }).catch(function (err) {
        throw new PluginError('rollup', err.toString());
    });
});


gulp.task('test:typechecking', (done) => {
    return gulp.src([
        'test/**/*.ts',
        "includes/**/*.ts"
    ])
        .pipe(ts(tsProject));
});
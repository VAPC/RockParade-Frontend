var gulp = require('gulp');
var Server = require('karma').Server;
var rollup = require('rollup').rollup;
var typescript = require('./lib/rollup-plugin-typescript.cjs.js');
var multiEntry = require('rollup-plugin-multi-entry');
var nodeResolve = require('rollup-plugin-node-resolve');
var PluginError = require('gulp-util').PluginError;

gulp.task('test:tdd', function (done) {
    new Server({
        configFile: require('path').resolve('karma.conf.js')
    }, done).start();
});

var rollupBundle = null;

gulp.task('test:script', function () {
    var globals = {
        angular: 'angular'
    };
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
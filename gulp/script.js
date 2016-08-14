var gulp = require('gulp');
var rollup = require('rollup').rollup;
var typescript = require('./lib/rollup-plugin-typescript.cjs.js');


const globals = {
    '@angular/core': 'ng.core',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic'
};

gulp.task('script', function () {
    return rollup({
        entry: 'app/bootstrap.ts',
        plugins: [
            typescript()
        ],
        external: Object.keys(globals)
    }).then(function (bundle) {
        return bundle.write({
            globals,
            format: 'iife',
            dest: '../../web/app.js',
            sourceMap: 'inline'
        });
    });
});
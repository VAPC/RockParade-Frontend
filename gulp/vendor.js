const gulp = require('gulp');
const { PluginError } = require('gulp-util');
const { rollup } = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const buble = require('rollup-plugin-buble');

const ng2 = {
    resolveId(importee){
        if(importee.startsWith('rxjs/')){
            return `${process.cwd()}/node_modules/rxjs-es/${importee.replace('rxjs/', '')}.js`;
        }
    }
};
gulp.task('copy:angular:polyfills', () => {
    return gulp.src('./index/angular2-polyfills.js')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('vendor', ['copy:angular:polyfills'], () => {
   return rollup({
       entry: 'vendor.js',
       plugins: [
           ng2,
           nodeResolve({ jsnext: true }),
           buble({
               target: {
                   chrome: 50
               },
               transforms: {
                   classes: true
               }
           })
       ]
   }).then(bundle => {
       return bundle.write({
           format: 'iife',
           moduleName: 'ng',
           dest: './dist/vendor.js',
           sourceMap: 'inline'
       });
   }).catch(err => {
       throw new PluginError('rollup', err.toString());
   });
});

import typescript from './gulp/rollup-plugin-ts';

export default {
    entry: './app/app/main.app',

    plugins: [
        typescript()
    ]
}
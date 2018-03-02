import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify'
import {minify} from 'uglify-js';

const output = (file, plugins) => ({
    input: 'index.js',
    output: {
        name: 'flatbush',
        format: 'umd',
        file
    },
    plugins
});

export default [
    output('flatbush.js', [buble()]),
    output('flatbush.min.js', [buble(), uglify({}, minify)])
];

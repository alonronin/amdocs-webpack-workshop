const { resolve } = require('path');

module.exports = {
    entry: {
        app: './'
    },

    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js'

    },

    context: resolve(__dirname, 'src'),
};
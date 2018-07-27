const webpack = require('webpack');
const path = require('path');

const base = {
    entry: {
        page1: path.resolve(__dirname, '../src/pages/page1/index.js'),
        page2: path.resolve(__dirname, '../src/pages/page2/index.js'),
        vendor: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "plugins": ["transform-runtime"],
                            "presets": ["env"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
            filename: '[name].js',
            chunks: ['vendor'],
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].js',
            chunks: ['page1', 'page2']
        })
    ]
};

module.exports = base;
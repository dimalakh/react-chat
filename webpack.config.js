const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devServer: {
        port: 9000,
        open: true,
        contentBase: './src'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader"}
                ]
            },
            {
                test: /\.svg/,
                use: [
                    { loader: 'svg-url-loader' }
                ]
            }
        ]
    }
};
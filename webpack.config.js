const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devServer: {
        port: 9090,
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
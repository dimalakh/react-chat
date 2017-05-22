const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'docs') + '/',
        filename: 'bundle.js',
        publicPath: ''
    },
    devServer: {
        port: 9000,
        open: true,
        contentBase: './src'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.svg/,
                use: [
                    { loader: 'svg-url-loader' }
                ]
            }
        ]
    },
     plugins: [
         new ExtractTextPlugin('styles.css'),
         new HtmlWebpackPlugin({
            title: 'chat',
            template: 'src/index.html',
            inject: 'body'
        }),
     ]
};
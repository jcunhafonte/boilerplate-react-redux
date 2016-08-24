const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        outputPath: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            template: 'index_webpack_template.html',
            title: 'NEW STRV M6',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: 'src/assets/favicon',
                    to: 'assets/favicon'
                },
                {
                    from: 'src/assets/share',
                    to: 'assets/share'
                }
            ]
        )
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', 'css!sass'
                )
            }
        ]
    },
};

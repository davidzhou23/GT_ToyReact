const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: "development",
    optimization: {
        minimize: false
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new miniCssExtractPlugin({
            filename: '[name].css'
        }),
        new htmlInlineCssWebpackPlugin()
    ]
}
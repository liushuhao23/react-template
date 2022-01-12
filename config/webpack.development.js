/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-06-27 15:45:40
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-12 18:08:08
 */
const {
    join,
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    output: {
        assetModuleFilename: "images/[name][ext]",
        filename: "scripts/[name].bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: join(__dirname, '../dist'),
        port: 8082,
        // 配合 friendly-error-webpack-plugin
        // node-notifier webpack-build-notifier
        // quiet:true,
        watchContentBase: true,

    },
    devtool:"source-map",
    plugins:[
        new HtmlWebpackPlugin({
            title:"react",
            filename:"index.html",
            template:resolve(__dirname,"../src/index-dev.html")
        })
    ]
}
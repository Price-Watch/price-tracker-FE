const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const setPath = function(folderName) {
    return path.join(__dirname, folderName);
}

module.exports = {
    entry: {
        build: path.join(setPath('src'), 'main.js')
    },
    output: {
        path: path.join(setPath('dist')),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(setPath('dist'))
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
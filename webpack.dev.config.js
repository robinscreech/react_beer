const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",

    entry: [
        path.join(__dirname, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ]
    },
    output: {
        path: path.join(__dirname + 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase:  __dirname,
        historyApiFallback: true,
        compress: true, 
        port: 9000
    },
    devtool: "sourcemap"
}
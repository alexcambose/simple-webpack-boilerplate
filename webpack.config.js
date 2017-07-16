const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, './dist/')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query : {
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ],

    },
    devServer: {
        publicPath: "/dist/"
    },
};
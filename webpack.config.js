const path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bunlde.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    }
};
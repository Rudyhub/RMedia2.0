const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "app.js",
        path: path.join(__dirname, 'app')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },{
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    target: 'node-webkit',
    plugins: [
        new VueLoaderPlugin()
    ],
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
};
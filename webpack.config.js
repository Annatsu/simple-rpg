// Node Modules
const webpack = require('webpack');
const path = require('path');

const debug = process.env.NODE_ENV !== "production";


module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};

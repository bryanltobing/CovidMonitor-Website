const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {

    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {
                        loader : "style-loader"
                    },
                    {
                        loader : "css-loader"
                    }
                ]
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'file-loader' 
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: ['file-loader']
            }

        ],
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            filename : "index.html"
        })
    ]



}
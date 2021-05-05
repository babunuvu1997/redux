const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/client/index.js',
    externals:{'express':'commonjs express'},
    output: {
        path: path.resolve(__dirname,'public','assets'),
        filename: 'webRexBundle.js',
        publicPath: '/webrex/'
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src", "client"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
            , {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },{
                test: /\.(jpg|gif|png)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            APP_SERVER_PATH:"http://localhost:8080"
        }),
        new MomentLocalesPlugin(),
        new BundleAnalyzerPlugin()
    ]
}


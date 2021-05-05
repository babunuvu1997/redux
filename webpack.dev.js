const merge = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
    mode: 'development',
    devtool:"eval-source-map",
    optimization: {
        usedExports: true
    },
    devServer:{
        publicPath:'/webrex/',
        port:3000,
        overlay:true,
        hot:true,
        contentBase:'./src/client/',
        openPage:'./',
        disableHostCheck:true,
        host:'0.0.0.0',
        proxy: {
            '/v1':{
                target:'http://localhost:8080',
            },
            '/v2':{
                target:'http://localhost:8000',
            },
            '/webrex/v1':{
                target:'http://localhost:8080',
                pathRewrite: {'^/webrex/v1' : '/v1'}
            },
            '/webrex/events/info':{
                target:'http://localhost:8080'
            },
            '/webrex/events': {
                target: 'ws://localhost:8080',
                ws: true
            },
            '/webrex/scheduler/events/info': {
                target:'http://localhost:8081'
            },
            '/webrex/scheduler/events': {
                target: 'ws://localhost:8081',
                ws: true
            }
        }
    }
 });



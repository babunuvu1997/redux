const {defaults} = require('jest-config');
const path = require=('path')
module.exports = {
    moduleDirectories:[
        'src','client',
        'node_modules'
    ],
    rootDir:'src',
    testEnvironment: "jest-environment-jsdom-global",
    testURL:'http://localhost:3000/webrex/',
    verbose:true
};
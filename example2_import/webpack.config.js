var config = require('./back_end/config')

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'require-node-loader',
                options: config.require_node
            }],
            include: [config.require_node.base]
        }]
    },
    entry: {
        'front_end/build.js': './front_end/index.js'
    },
    output: {
        path: __dirname,
        filename: '[name]'
    },
    devtool: 'source-map',
    mode: 'development',
};
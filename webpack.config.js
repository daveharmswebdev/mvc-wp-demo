const path = require('path');

module.exports = {
    entry: ['./Scripts/src/index.js'],
    output: {
        path: path.resolve(__dirname, './Scripts/dist'),
        filename: 'bundle.js'
    },
    // IMPORTANT NOTE: If you are using Webpack 2, replace "loaders" with "rules"
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    }
}
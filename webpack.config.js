const path = require('path')
module.exports = {
    context: __dirname,
    entry: "./frontend/facepalm.jsx",
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: { // sometimes will say qeuery to options
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    devtool: 'source-map'
}
const path = require('path');

module.exports = {
    mode: 'production',
    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
    },

    module: {
        rules: [
            // loader for css files
            {
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader'],
            },

            // loader for scss files
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            // for images
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i, // Shriftlar va rasmlar uchun
                type: 'asset/resource',
            },

            // for fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            // babel for javascript and react
            { 
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    }
}

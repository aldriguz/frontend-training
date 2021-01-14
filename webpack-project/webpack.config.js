module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'my-script.bundle.js' //compilation file
    },
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
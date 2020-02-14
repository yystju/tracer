const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV)
    console.log('production: ', env.production)
    return {
        mode: 'development',
        entry: {
            app: './src/index.js',
            print: './src/print.js',
        },
        devtool: 'inline-source-map',
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: '',
            }),
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js',
            publicPath: '/',
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        module: {
            rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            ],
        },
        devServer: {
            contentBase: './dist',
            hot: true,
        },
    }
}

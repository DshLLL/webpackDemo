const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const EncodingPlugin=require('webpack-encoding-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env'],
            //             plugins: ['@babel/plugin-proposal-object-rest-spread']
            //         }
            //     }
            // },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            outputPath:'dist'
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
        // new EncodingPlugin({
        //     encoding:'utf-8'
        // })
    ]
};
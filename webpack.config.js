var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './index.js',
        cooperationAlertContent: './src/page/cooperation/cooperationAlertContent.js',
        'page/cooperation/cooperationAlertContent': './src/page/cooperation/cooperationAlertContent.js'
    },
    output: {
        path: './build',
        publicPath: '',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=lib/image/[name].[ext]?[hash]'
            },
            {
                test: /\.(ttf)$/,
                loader: 'file?name=lib/font/[name].[ext]?[hash]'
            }
        ]
    },
    resolve: {alias: {'vue': 'vue/dist/vue.js'}},
    // example: if you wish to apply custom babel options
    // instead of using vue-loader's default:
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: '某不科学的代码狗',
            chunks: ['index'],
            template: './index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'page/cooperation/cooperationAlertContent.html',
            title: '合作内容',
            chunks: ['cooperationAlertContent'],
            template: './src/page/cooperation/cooperationAlertContent.html'
        })
    ]
}


if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }));
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    module.exports.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
} else {
    module.exports.devtool = '#source-map'
}
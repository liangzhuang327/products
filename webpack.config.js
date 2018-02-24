const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/assets/"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                //打包除这个文件之外的文件
                exclude: path.resolve(__dirname, "./node_modules"),
                //打包包括的文件
                include: path.resolve(__dirname, "./src"),
                query: {
                    plugins: [["import", { "style": "css", "libraryName": "antd" }]],
                    cacheDirectory: true
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'less-loader'
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
            },]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '青豆'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',//在打包好的js文件中找到错误代码的源文件
    devServer: {
        clientLogLevel: "none",//在开发工具（DevTools）的控制台（控制台）将显示消息，如：在重新加载之前，在一个错误之前，或者模块热替换（热模块更换）启用时,设置为false就是不显示
        //lazy:true
        //filename:'bundle.js'在静态模式中，此选项可减少编译。默认在静态模式，每个请求都会产生全新的编译。使用filename，可以只在某个文件被请求时编译。filename不在使用惰性加载时没有效果。
        hot: true,//热替换是否启用
        open: true,//当open启用时，开发服务器将打开浏览器
        //openPage: '/different/page',指定打开浏览器时导航到的页面
        port: 8080,//指定要监听请求的端口号
        // publicPath: "/assets/",//此路径下的打包文件可在浏览器中访问。服务器假设运行在http://localhost:8080并且output.filename被设置为bundle.js默认。publicPath是"/"，所以你的包（束）通过可以http://localhost:8080/bundle.js访问
        inline: true,//在DEV-服务器的两种不同模式之间切换。默认情况下，程序应用启用内联模式（串联模式）。这意味着一段处理实时重载的脚本被插入到你的包（束）中，并且构建消息将会出现在浏览器控制台。
    }
}
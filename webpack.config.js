const path = require('path');
module.exports = {
    //入口文件的配置项
    entry: './index.js',
    //出口文件的配置项
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js',
        publicPath:'temp/'
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015']
                        }
                    }
                ]
            }
        ]
    },
    //插件，用于生产模版和各项功能
    plugins: [],
    //配置webpack开发服务功能
    devServer: {
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:8080
    }
}
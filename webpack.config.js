module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/built'    //__dirname能获取当前文件路径
    },
    node: { module: "empty", net: "empty", fs: "empty" },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,      //正则匹配
                exclude: /node_modules/,   //除了node_modules包里的内容外都进行编译
                loader: "babel-loader",    //使用babel-loader进行转码，将es6转成es5
                options: {
                    "presets": [
                        ["es2015", { "modules": false }],
                        "react"
                    ]
                }
            },
            {    // 配置css
                test: /\.css$/,
                use: [
                    "style-loader",  //style-loader、loader: "css-loader"、 "less-loader"顺序不能变
                    {
                        loader: "css-loader",  
                    },
                ]
            },
            {    // 配置scss
                test: /\.scss$/,
                use: [
                    "style-loader",  //style-loader、loader: "css-loader"、 "less-loader"顺序不能变
                    {
                        loader: "css-loader",
                    },
                    "sass-loader"
                ]
            },
            {test: /\.svg/, loader: 'svg-url-loader'}

        ]
    }
}
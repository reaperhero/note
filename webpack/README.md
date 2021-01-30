# webpack

## 开始

npm init -y

```
{
  "name": "webpack-train",
  "version": "1.0.0",
  "description": "webpack4",
  "private": true,
  "scripts": {
    "build":"webpack"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lycHub/webpack-train.git"
  },
  "keywords": ["webpack4"],
  "author": "Madao",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lycHub/webpack-train/issues"
  },
  "homepage": "https://github.com/lycHub/webpack-train#readme"
}
```

npm install webpack webpack-cli -D


##  基本配置与mode

webpack.config.js

mode可选值有三个：'development', 'production', 'none'.

```
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js'
  }
};
```


// webpack.development.config.js
```
module.exports = {
+ mode: 'development'
- devtool: 'eval',
- cache: true,
- performance: {
-   hints: false
- },
- output: {
-   pathinfo: true
- },
- optimization: {
-   namedModules: true,
-   namedChunks: true,
-   nodeEnv: 'development',
-   flagIncludedChunks: false,
-   occurrenceOrder: false,
-   sideEffects: false,
-   usedExports: false,
-   concatenateModules: false,
-   splitChunks: {
-     hidePathInfo: false,
-     minSize: 10000,
-     maxAsyncRequests: Infinity,
-     maxInitialRequests: Infinity,
-   },
-   noEmitOnErrors: false,
-   checkWasmTypes: false,
-   minimize: false,
- },
- plugins: [
-   new webpack.NamedModulesPlugin(),
-   new webpack.NamedChunksPlugin(),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
- ]
}

```


// webpack.production.config.js
```
module.exports = {
+  mode: 'production',
- performance: {
-   hints: 'warning'
- },
- output: {
-   pathinfo: false
- },
- optimization: {
-   namedModules: false,
-   namedChunks: false,
-   nodeEnv: 'production',
-   flagIncludedChunks: true,
-   occurrenceOrder: true,
-   sideEffects: true,
-   usedExports: true,
-   concatenateModules: true,
-   splitChunks: {
-     hidePathInfo: true,
-     minSize: 30000,
-     maxAsyncRequests: 5,
-     maxInitialRequests: 3,
-   },
-   noEmitOnErrors: true,
-   checkWasmTypes: true,
-   minimize: true,
- },
- plugins: [
-   new TerserPlugin(/* ... */),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-   new webpack.optimize.ModuleConcatenationPlugin(),
-   new webpack.NoEmitOnErrorsPlugin()
- ]
}
```



// webpack.custom.config.js
```
module.exports = {
+ mode: 'none',
- performance: {
-  hints: false
- },
- optimization: {
-   flagIncludedChunks: false,
-   occurrenceOrder: false,
-   sideEffects: false,
-   usedExports: false,
-   concatenateModules: false,
-   splitChunks: {
-     hidePathInfo: false,
-     minSize: 10000,
-     maxAsyncRequests: Infinity,
-     maxInitialRequests: Infinity,
-   },
-   noEmitOnErrors: false,
-   checkWasmTypes: false,
-   minimize: false,
- },
- plugins: []
}
```


## 使用plugins

```
npm i html-webpack-plugin -D

npm i clean-webpack-plugin -D


plugins: [
    new HtmlWebpackPlugin({
      // 设置模板title
      title: 'use HtmlWebpackPlugin',
  
      // 生成的模板名称，默认 'index.html', 规则类似output
      filename: 'admin.html',

      // 指定生成的html文件依赖的模板
      template: './index.html',

      // 生成favicon
      favicon: 'path/to/example.ico',

      // 插入meta标签
      meta: {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no',
        'apple-touch-fullscreen': 'yes',
      }

      // ....
    })
  ]
```
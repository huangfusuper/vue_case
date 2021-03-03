##  安装 node 

## 安装webpack
```shell
 npm install webpack@3.6.0  -g 
 
 webpack -version
```

## webpack目录
src: 源码
|
|
dist: 编译后的代码

## 编译命令

```shell
webpack ./src/mian.js ./dist/bundle.js
```

## 自动编译打包配置
1. 创建文件：webpack.config.js

```js
const path = require('path')
module.exports = {
	entry: './src/main.js',  //源码路径
	output: {
		path: '/dist',  //打包路径
		filename: 'bundle.js'  //打包文件
	}
}
```
2. 初始化项目： npm init
3. 生成文件：package.json
```json 
{
  //名称
  "name": "webpack_case",
  //版本
  "version": "1.0.0",
  //介绍
  "description": "",
  //入口文件
  "main": "index.js",
  // npm install 后缀配置
  "scripts": {
	//npm run test
    "test": "echo \"Error: no test specified\" && exit 1",
	//npm run build
    "build": "webpack"
  },
  //作者
  "author": "huangfu",
  //开源协议
  "license": "ISC",
  //这里是开发时依赖的版本相当于maven的坐标
  "devDependencies": {
	//本项目内局部的webpack 对应的 num install webpack@3.6.0 --save-dev
    "webpack": "^3.6.0"
  }
}

```
4. num install 就能安装对应的依赖
5. 打包：webpack
6. webpack 与 npm run build关联
7. 修改package.json

```json
	{
	  "name": "webpack_case",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
		//关联映射 nup run 名称
		"build": "webpack"
	  },
	  "author": "huangfu",
	  "license": "ISC"
	}
	
```

>注意这个文件的 `scripts` 标签内添加了一个 build标签，该标签是 npm run 的后缀标签， 
>当执行 npm run build的时候，他会寻找到这个标签执行 webpack命令

## 使用局部本地的webpack
>该版本与全局的webpack隔离，使用自己本项目内的webpack版本，所以需要安装一个本项目内的webpack
```shell 
npm install webpack@3.6.0 --save-dev
```
`--save-dev`:指令是指安装为开发时依赖

## loader的使用
当项目内需要引入css文件的时候，那么我们需要在入口文件main.js文件中引入对应的css文件
```js
//加载一个css文件  必须使用loader
require("./css/style.css")
```
但是此时使用npm run build肯定失败，因为他并不能加载css文件，我们需要引入对应的加载器，才能够引入
[webpack loader 的列表使用文档](https://www.webpackjs.com/loaders/)

1. 安装css loader
```shell
npm install --save-dev css-loader
```
2. 引入css文件到入口js main.js
```js
require("./css/style.css") 或者 import css from './css/style.css';
```
3. 修改webpack.config.js 增加module模块
```json
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```
4. 此时完整的webpack.config.js
```js
const path = require('path')
module.exports = {
	entry: './src/main.js',  //源码路径
	output: {
		path: path.resolve(__dirname,'dist'),  //打包路径
		filename: 'bundle.js'  //打包文件
	},
	module: {
	    rules: [
	      {
			//正则表达式，匹配以css后缀的文件
	        test: /\.css$/,
	        use: [ 'style-loader', 'css-loader' ]
	      }
	    ]
	}
}
```
5. 但是我们仔细观察use里面不只只有 css-loader 还有一个 style-loader ，我们这个也需要安装
```shell
npm install style-loader --save-dev
```
注意一下这俩货的版本 css-loader:2.0.2, style-loader:0.23.1,
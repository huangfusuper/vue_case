const path = require('path')
module.exports = {
	entry: './src/main.js',  //源码路径
	output: {
		path: path.resolve(__dirname,'dist'),  //打包路径
		filename: 'bundle.js'  //打包文件
	}
}
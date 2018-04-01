// var path = require('path');
 
// module.exports = {
//   entry: './assets/js/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };
       // test: /\.css$/, use: 'css-loader',
       // test: /\.ts$/, use: 'ts-loader'
      // test: /\.js$/, // запустим загрузчик во всех файлах .js
      // exclude: /node_modules/, // проигнорируем все файлы в папке  node_modules 
      // use: 'jshint-loader'
var path = require('path');
 
module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // добавим загрузчик JSHint 
	module: {
	    rules: [
	    	{
		    	test: /\.css$/,
		        use: [
		          { loader: 'style-loader' },
		          {
		            loader: 'css-loader',
		            options: {
		              modules: true
		          	}
		          }
		  		]
	  		}
	  	]
	}
};
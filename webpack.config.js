const path 							= require('path'),
			HtmlWebpackPlugin = require('html-webpack-plugin'),
			ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = {
		entry: {
			app: path.join(__dirname, 'app') //will default to index.js if 'app/index.js' not specified
			}, 
		output: {
			path: path.join(__dirname, 'build'),
			filename: '[name].js'
		},
	  module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: ExtractTextPlugin.extract({
	        	fallback: 'style-loader',
	        	use: [ 
  	        	'style-loader', 
  	        	'css-loader',
  	        	'postcss-loader', 
  	        ],
  	      }),
	      },
	      // {
	      //   test: /\.scss$/,
	      //   use: [ 'style-loader', 'css-loader', 'sass-loader' ],
	      // },
	    ],
	  },
		plugins: [
			new ExtractTextPlugin({
				filename: '[name].css',
				disable: false,
				allChunks: true,
			}),
			new HtmlWebpackPlugin({
				title: 'Webpack demo',
			}),
		],
}

const productionConfig = () => commonConfig;

const developmentConfig = () => {
	const config = {
		devServer: {
			historyApiFallback: true, //History Api routing fallback for HTML5
			stats: 'errors-only', //Less console output - only errors
			host: process.env.HOST, //default to 'localhost'
			port: process.env.PORT, //defaults to 8080
			
			//the overlay will show eslint warnings in the browser and force you to fix them before continuing
			// overlay: {
			// 	errors: true,
			// 	warnings: true,
			// }
		},
		devtool: 'source-map',
	};

	//The following is my own crappy way of deep merging the production and dev objects when module/plugins are in both
	//Each new type of duplicative property/key will require it's own merge procedure using this method. But it lets me follow
	//the structure of surviveJS without having to use the author's own webpack-merge library and file structure which felt
	//unnecessarily complicated (just like everything to do with webpack (and react))

	const rules = [
				{
					test: /\.js$/,
					enforce: 'pre',
					loader: 'eslint-loader',
					options: {
						emitWarning: true,
					}
				},
	];

	const plugins = [];

	commonConfig.plugins = commonConfig.plugins.concat(plugins);
	commonConfig.module.rules = commonConfig.module.rules.concat(rules);

	return Object.assign({}, commonConfig, config);
}

module.exports = (env) => {
	if (env === 'production') {
		return productionConfig();
	}
	return developmentConfig();
}
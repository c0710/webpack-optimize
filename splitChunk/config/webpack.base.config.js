const webpack = require('webpack');
const path = require('path');

const base = {
	entry: {
		page1: path.resolve(__dirname, '../src/pages/page1/index.js'),
		page2: path.resolve(__dirname, '../src/pages/page2/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							"plugins": ["transform-runtime"],
							"presets": ["env"]
						}
					}
				]
			}
		]
	},
	optimization: {
	
	}
};
module.exports = base;
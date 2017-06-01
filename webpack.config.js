"use strict";

const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./webpack-loaders');

const PATHS = {
  src: path.join(__dirname, 'src'),
  res: path.join(__dirname, 'res'),
  css: path.join(__dirname, 'res/css')
};

const common = {
	entry: {
		app: PATHS.src
	},
	output: {
		path: PATHS.res,
		filename: 'bundle.js'
	},
	module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
	resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

let config;

switch(process.env.npm_lifecycle_event) {
	case 'server':
		config = merge(
		  common,
      {
        devtool: 'source-map'
      },
      parts.setupCSS(PATHS.css)
	  );
		break;
	default:
		config = merge(
			common,
			{
	      devtool: 'eval-source-map'
	    },
	    parts.setupCSS(PATHS.css),
			parts.devServer({
				host: process.env.host,
				port: 3000
			})
		);
}

module.exports = validate(config);

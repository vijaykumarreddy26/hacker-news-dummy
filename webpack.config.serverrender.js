var webpack = require('webpack');

module.exports = {
    mode: 'production',
	entry: {
		renders: [
			'./client/src/server.js',
		],
	},
	target: 'node',
	output: {
		path: __dirname + '/server_renders/',
		filename: 'page.js',
		publicPath: '/',
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			'node_modules',
		],
    },
    module: {
        // configuration regarding modules
        rules: [
          // rules for modules (configure loaders, parser options, etc.)
          {
            test: /\.jsx?$/,
            // conditions for the issuer (the origin of the import)
            enforce: "pre",
            enforce: "post",
            // flags to apply these rules, even if they are overridden (advanced option)
            loader: "babel-loader",
            // the loader which should be applied, it'll be resolved relative to the context           
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread"]
            },
            // options for the loader
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ]
    }
};

const path = require('path');

module.exports = (env, options) =>
{
	const isProduction = options?.mode === 'production';

	return {
		devtool: false,

		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'ice': path.resolve(__dirname, '.ice')
			}
		},

		module: {
			rules: [
				{
					test: /\.?js$/i,
					exclude: /(node_modules)/,
					use: {
						// `.swcrc` can be used to configure swc
						loader: 'swc-loader',
						options: {
							sourceMaps: false,
							jsc: {
								target: 'es2020',

								transform: {
									react: {
										runtime: 'automatic',
										development: !isProduction,
										refresh: !isProduction
									}
								}
							}
						}
					}
				}
			]
		}
	};
};

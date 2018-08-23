module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb'],
	plugins: [
		'react',
		'jsx-a11y',
		'import'
	],
	rules: {
		'comma-dangle': 0,
		'global-require': 0,
		'import/no-extraneous-dependencies': 0,
		'indent': [2, 'tab', { 'SwitchCase': 1 }],
		'no-tabs': 0,
		'react/jsx-filename-extension': [
			1, { 'extensions': ['.js', '.jsx'] }
		],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-one-expression-per-line': 0,
		'react/destructuring-assignment': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'react/button-has-type': 0,
		'object-curly-newline': [2, {
			'ImportDeclaration': { 'multiline': true, 'minProperties': 7 },
		}],
		'no-shadow': 0
	},
	env: {
		'browser': true,
		'es6': true,
		'jest': true,
		'node': true
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: './webpack/webpack.prod.js',
			}
		}
	}
}

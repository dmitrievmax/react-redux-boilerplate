module.exports = (app) => {
	const isProd = process.env.NODE_ENV === 'production';

	return isProd
		? require('./frontendProdMiddleware')(app)
		: require('./frontendDevMiddleware')(app);
};

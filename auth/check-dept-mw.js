module.exports = department => {
	return function(req, res, next) {
		if (req.decodedToken.roles && req.decodedToken.department.includes(department)) {
			next();
		} else {
			res
				.status(403)
				.json({ message: 'You do not have access to this information.' });
		}
	};
};

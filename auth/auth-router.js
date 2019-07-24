const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('../config/secrets');
const Users = require('../users/users-model.js');

// User Registration

router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;

	Users.add(user)
		.then(newUser => {
			res.status(201).json(newUser);
		})
		.catch(error => {
			res.status(500).json({
				message: error
			});
		});
});

// User Login

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = generateToken(user);

				res.status(200).json({
					message: `Welcome ${user.username}!`,
					token
				});
			} else {
				res.status(401).json({ message: 'You shall not pass!' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

// JWT Generation

function generateToken(user) {
	const payload = {
		sub: user.id,
		username: user.username,
		dept: user.dept
	};

	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;
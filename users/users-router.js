const router = require('express').Router();
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-mw');


router.get('/', restricted,  (req, res) => {
  const department = req.decodedToken.department;
  console.log(department);
	if (department === 'HR') {
		Users.find()
			.then(users => {
				res.json(users);
			})
			.catch(err => res.send(err));
	} else {
		Users.findBy({department})
			.then(users => {
				res.json(users);
			})
      .catch(err => res.send(err));
    }
});

module.exports = router;
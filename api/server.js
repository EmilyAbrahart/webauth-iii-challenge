const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/login', authRouter);
server.use('/api/register', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
	res.send('Welcome to WebAuth III Challenge');
});

module.exports = server;
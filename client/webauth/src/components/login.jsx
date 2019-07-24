import React from 'react';
import axios from 'axios';

const LoginForm = () => {
	const usernameRef = React.createRef();
	const passwordRef = React.createRef();

	const login = () => {
		const loginObj = {
			username: usernameRef.current.value,
			password: passwordRef.current.value
		};

		axios
			.post('http://localhost:5000/api/auth/login', loginObj)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				window.location.reload();
			})
			.catch(err => console.log(err));
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={login}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					ref={usernameRef}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					ref={passwordRef}
				/>
				<button>Login</button>
			</form>
		</div>
	);
};

export default LoginForm;

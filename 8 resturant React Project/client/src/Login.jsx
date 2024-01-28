import React, { useContext, useState } from 'react';
import { Context } from './Layout';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginUser, setLoginUser] = useContext(Context);
	const navigate = useNavigate();
	const LoginFun = async () => {
		const newUser = JSON.stringify({ password, email });
		// console.log(newUser);
		const fetchData = await fetch('http://localhost:5001/meals/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: newUser,
		})
			.then((res) => res.json())
			.then((data) => {
				setLoginUser(data);
				console.log(data);
				navigate('/products');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div className="form">
				<input
					type="text"
					placeholder="Put your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Put your Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<span className="login-btn btn" onClick={() => LoginFun()}>
					Login
				</span>
			</div>
			{loginUser && <p>Welcome mr {loginUser.email}</p>}
		</div>
	);
};

export default Login;

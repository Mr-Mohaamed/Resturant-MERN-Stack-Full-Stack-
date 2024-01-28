import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Layout';

const Nav = () => {
	const [loginUser, setLoginUser] = useContext(Context);

	return (
		<div class="nav">
			<ul>
				<li>
					<Link to="/">ABOUT</Link>
				</li>
				<li>
					<Link to="products">PRODUCTS</Link>
				</li>
				<li class="logo">
					<Link to="">
						<p>Eat</p>
						<p>curious</p>
					</Link>
				</li>
				<li>
					<Link to="">RECIPES</Link>
				</li>
				{loginUser ? (
					<li>
						<Link to="cart">Cart</Link>
					</li>
				) : (
					<li>
						<Link to="login">Login</Link>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Nav;

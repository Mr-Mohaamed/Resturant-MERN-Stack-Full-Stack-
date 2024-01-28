import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Context } from './Layout';
import { useContext, useEffect, useState } from 'react';

function Cart() {
	const [loginUser, setLoginUser] = useContext(Context);
	const navigate = useNavigate();
	const [cart, setCart] = useState([]);
	console.log(cart);
	const clearCart = () => {
		const deleteCart = fetch(
			'http://localhost:5001/meals/meal/' + loginUser._id,
			{ method: 'DELETE' }
		)
			.then((res) => res.json())
			.then((data) => {
				setLoginUser(data);
				console.log(data);
				navigate('/products');
			});
		console.log(loginUser);
	};
	useEffect(() => {
		fetch('http://localhost:5001/meals/meal/' + loginUser._id)
			.then((res) => res.json())
			.then((data) => {
				setCart(data);
				console.log(data);
			});
	}, []);

	return (
		<>
			<div className="cart-wrapper">
				<div className="cart-box">
					{cart.map((cartElement) => (
						<div className="cart-element">
							<div className="img">
								<img src={cartElement.photoURL} alt="" />
							</div>
							<div className="details">
								<span className="bold">Name:</span>
								<span>{cartElement.name}</span>
							</div>
						</div>
					))}
				</div>
				<span className="btn cart-btn" onClick={() => clearCart()}>
					Clear Cart
				</span>
			</div>
		</>
	);
}

export default Cart;

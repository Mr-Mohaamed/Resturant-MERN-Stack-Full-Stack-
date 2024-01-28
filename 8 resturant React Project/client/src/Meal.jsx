import { useEffect, useState, useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Context } from './Layout';

function Meal() {
	const [loginUser, setLoginUser] = useContext(Context);
	const navigate = useNavigate();
	const { id } = useParams();
	const [meal, setMeal] = useState({});
	const [ingredients, setIngredients] = useState([]);

	const mealData = useEffect(() => {
		const data = fetch('http://localhost:5001/meals/' + id)
			.then((res) => res.json())
			.then((data) => {
				setMeal(data);
				setIngredients(data.ingredients);
			});
	}, []);

	const poshMealToCart = async () => {
		const userId = JSON.stringify({ loginUserID: loginUser._id });
		const postReqCart = await fetch('http://localhost:5001/meals/meal/' + id, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: userId,
		}).then((res) =>
			res.json().then((data) => {
				console.log(data);
				navigate('/products');
			})
		);
	};

	const testNav = () => {
		navigate('/products');
	};

	return (
		<>
			<div className="meal-box">
				<div className="meal-img">
					<img src={meal.photoURL} alt="" />
				</div>
				<div className="details">
					<h1> {meal.name}</h1>
					<p>
						<span>
							<span className="bold">Ingredients:</span>
						</span>
						<span className="ingredients">
							{ingredients.map((ingredient) => (
								<span className="ingredient">{ingredient}</span>
							))}
						</span>
					</p>
					<p>
						<span className="bold">Orgin:</span> {meal.origin}
					</p>
					<p>
						<span className="bold">Instructions:</span> {meal.instructions}
					</p>
				</div>
			</div>
			<span className="btn cart-btn" onClick={poshMealToCart}>
				Add To Cart
			</span>
		</>
	);
}

export default Meal;

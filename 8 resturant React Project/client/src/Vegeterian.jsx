import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Vegeterian() {
	const [mealsFromDB, setMealsFromDB] = useState([]);

	const getVegetarianOnlyMeals = useEffect(() => {
		const meals = fetch('http://localhost:5001/meals/category/Vegetarian')
			.then((res) => res.json())
			.then((meals) => {
				setMealsFromDB(meals);
				console.log(meals);
			});
	}, []);

	return (
		<>
			<h2>All meals</h2>
			<div className="products-grid">
				{mealsFromDB.map((meal) => (
					<Link to={`../${meal._id}`}>
						<img src={meal.photoURL} className="product" />
					</Link>
				))}
			</div>
		</>
	);
}
// http://localhost:5001/meals/category/Vegetarian
export default Vegeterian;
// .........................................................

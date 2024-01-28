const Router = require('express');
const mealsSchema = require('../../DB/schemas/meals');
const ClientSchema = require('../../DB/schemas/sells');
const router = Router();

const getMeals = router.get('/', async (req, res) => {
	const meals = await mealsSchema.find();
	res.status(200).json(meals);
});
const getMeal = router.get('/:id', async (req, res) => {
	const mealId = req.params.id;
	const meal = await mealsSchema.findById(mealId);
	res.status(200).json(meal);
});
// const getCategoryMeals = router.get('/category/:category', async (req, res) => {
// 	const category = req.params.category;
// 	const meals = await mealsSchema.find({ category });
// 	res.status(200).json(meals);
// });
const getCategoryVegetarian = router.get(
	'/category/Vegetarian',
	async (req, res) => {
		const category = req.params.category;
		const meals = await mealsSchema.find({ category: 'Vegetarian' });
		res.status(200).json(meals);
	}
);
const getCategoryMeatOnly = router.get('/category/meat', async (req, res) => {
	const meals = await mealsSchema.find({ category: { $nin: 'Vegetarian' } });
	res.status(200).json(meals);
});

const createClient = router.post('/register', async (req, res) => {
	const { email, password } = req.body;
	const newClient = await ClientSchema.create({ email, password });
	res.json(newClient);
});

const loginUser = router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	const loginClient = await ClientSchema.findOne({ email });
	res.json(loginClient);
});

const getCart = router.get('/meal/:id', async (req, res) => {
	const userID = req.params.id;
	const pushCartElement = await ClientSchema.findById(userID);
	res.json(pushCartElement.cart);
});

const postMealToClient = router.post('/meal/:id', async (req, res) => {
	const { loginUserID } = req.body;
	const mealID = req.params.id;
	const cartElement = await mealsSchema.findById(mealID);
	const pushCartElement = await ClientSchema.findByIdAndUpdate(loginUserID, {
		$push: { cart: cartElement },
	});
	res.json(pushCartElement);
});

const deleteCartItem = router.delete('/meal/:id', async (req, res) => {
	const clientID = req.params.id;
	const mealFromCart = await ClientSchema.findByIdAndUpdate(clientID, {
		$set: { cart: [] },
	});
	res.json(mealFromCart);
});
// const putNewMeal = router.post('/new-meal') , async(req,res)=>{
// 	const meals = await mealsSchema.create()
// }
// const getMealsBySearch = router.get('/search', async (req, res) => {
// 	const search = req.query.query;
// 	const meals = await mealsSchema.find({
// 		$text: {
// 			$search: search,
// 			$caseSensitive: false,
// 			$diacriticSensitive: false,
// 		},
// 	});
// 	const array = await result.toArray();
// 	res.status(200).json(meals);
// });
module.exports = router;

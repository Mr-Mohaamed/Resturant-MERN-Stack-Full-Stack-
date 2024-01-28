import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import Products from './Products';
import Cart from './Cart';
import Vegeterian from './Vegeterian';
import AddProduct from './AddProduct';
import Meat from './Meat';
import Meal from './Meal';
import AllMeals from './AllMeals';
import Login from './Login';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <About /> },
			{
				path: 'products',
				element: <Products />,
				children: [
					{ index: true, element: <AllMeals /> },
					{ element: <Meat />, path: 'meat' },
					{ element: <Vegeterian />, path: 'vegeterian' },
					{ element: <AddProduct />, path: 'add-product' },
					{ element: <Meal />, path: ':id' },
				],
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />);

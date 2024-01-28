const express = require('express');
const app = express();
app.use(express.json());

const PORT = 5001;
app.listen(PORT);

const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://admin:admin@mycontacts.1slr8rv.mongodb.net/mycontacts?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('connected to DB');
	})
	.catch((err) => {
		console.log(err);
	});

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const cors = require('cors');
app.use(cors());

const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(
	session({
		secret: 'KJAHSDKJHAWKJDHAWHDKJAWD',
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl:
				'mongodb+srv://admin:admin@mycontacts.1slr8rv.mongodb.net/mycontacts?retryWrites=true&w=majority',
		}),
	})
);
const mealsRoute = require('./routes/mealsRoute');
app.use('/meals', mealsRoute);

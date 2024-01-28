const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
	name: {
		type: mongoose.SchemaTypes.String,
		require: true,
	},
	category: { type: mongoose.SchemaTypes.String, require: true },
	origin: { type: mongoose.SchemaTypes.String },
	instructions: { type: mongoose.SchemaTypes.String },
	photoURL: { type: mongoose.SchemaTypes.String },
	ingredients: { type: mongoose.SchemaTypes.Array, require: true },
});

module.exports = mongoose.model('meals', mealsSchema);

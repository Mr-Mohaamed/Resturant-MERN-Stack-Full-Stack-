const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
	email: {
		type: mongoose.SchemaTypes.String,
		require: true,
		unique: true,
	},
	password: { type: mongoose.SchemaTypes.String, require: true },
	cart: { type: mongoose.SchemaTypes.Array },
});

module.exports = mongoose.model('resturant-clients', ClientSchema);

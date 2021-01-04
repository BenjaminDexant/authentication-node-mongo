// mongoose provides a modeling environment for data (CRUD is provided by mongoose)
const mongoose = require("mongoose");

// create the user schema
const User = mongoose.model(
	"User",
	new mongoose.Schema({
		username: String,
		email: String,
		password: String,
		roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Role",
			},
		],
	})
);

module.exports = User;

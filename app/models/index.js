// mongoose provides a modeling environment for data (CRUD is provided by mongoose)
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// init the db
const db = {};

db.mongoose = mongoose;

// alias naming
db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;

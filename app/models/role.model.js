// mongoose provides a modeling environment for data (CRUD is provided by mongoose)
const mongoose = require("mongoose");

// create the role schema
const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;

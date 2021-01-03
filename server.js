// express is for building the REST API
const express = require("express");
// body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");
// cors provides Express middleware to enable CORS with various options
const cors = require("cors");

// create the express app
const app = express();

// set the cors option origin
var corsOptions = {
  origin: "http://localhost:8081"
};

// add cors middleware
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple test route
app.get("/", (req, res) => {
  res.json({ message: "My first simple route test." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

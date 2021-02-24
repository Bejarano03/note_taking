// Setting up requirements
const express = require("express");
const fs = require("fs");
const path = require("path");


// Calling express and dedicating a port for it
const app = express();
const PORT = process.env.PORT || 3066;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/Develop/public"));




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


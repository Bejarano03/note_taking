// Setting up requirements
const express = require("express");
const fs = require("fs");
const notes = require("./db/db.json");
const path = require("path");
const routes = require("./routes/index");
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");
// const cors = require("cors");
const AppRoutes = require("./routes/index");

// Calling express and dedicating a port for it
const app = express();
const PORT = process.env.PORT || 3066;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/routes/", routes));
// app.use(cors());

app.use(AppRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


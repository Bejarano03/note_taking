const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
});



module.exports = router
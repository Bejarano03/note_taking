const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
});

router.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("Develop/db/db.json))
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("Develop/db/db.json", JSON.stringify(notes))
    res.json(notes);

});

module.exports = router
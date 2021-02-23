const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

router.get

router.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("Develop/db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("Develop/db/db.json", JSON.stringify(notes))
    res.json(notes);
});

router.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("Development/db/db.json"));
    const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync("Develop/db/db.json" , JSON.stringify(delNote));
    res.json(delNote);
});

module.exports = router;
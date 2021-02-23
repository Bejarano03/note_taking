const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

let notes = [];

router.get("/api/notes", (err, res) => {
    try {
      // reads the notes from json file
      notes = fs.readFileSync("Develop/db/db.json", "utf8");
      console.log("hello!");
      // parse it so notesData is an array of objects
      notes = JSON.parse(notes);
  
      // error handling
    } catch (err) {
      console.log("\n error (in app.get.catch):");
      console.log(err);
    }
    //   send objects to the browser
    res.json(notes);
  });

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
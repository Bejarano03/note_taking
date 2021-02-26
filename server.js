// Middleware
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/Develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/db/db.json'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));
    let notelength = noteList.length.toString();

    newNote.id = notelength;
    noteList.push(newNote);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});

app.delete('/api/notes/:id', (req, res) => {
    let noteList = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));
    let noteId = req.params.id.toString();

    noteList = noteList.filter((selected) => {
        return selected.id != noteId;
    });

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});



app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});

// This is the only document which needed to be created and coded for this project to work.
// MODULES/IMPORTS/CONNECTIONS //
const PORT = process.env.PORT || 3001;
const express = require('express');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');
const databaseNotes = require('./db/db.json');

const app = express();

// MIDDLEWARE //
// Parse out incoming requests with JSON payloads
app.use(express.json());
// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
// Serves the static files from the specified directory
app.use(express.static('public'));

// GET ROUTES //
// Route to get the databaseNotes
app.get('/api/notes', (req, res) => {
    res.json(databaseNotes);
});
// Route to get the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// Route to get the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
// Wildcard route for getting any potential misdirects
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
// Function for the new notes to rewrite the database
createNewNote = (body, notesArray) => {
    const newNote = body;
    // NPM for making unique IDs for each note
    body.id = uuidv1();
    // Pushing the new note to the notes array
    notesArray.push(newNote);
    // fs write file to the database path
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notesArray, null, 2));

    return newNote;
}
// Function to remove notes from the database
deleteNote = (id, notesArray) => {
    // Looping through the array to determine which note to delete from the array
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];
        // Matching the ID to splice it out and remove it from the database path
        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notesArray, null, 2));
            // BREAK! bust out of here.
            break;
        }
    }
}
// Post route for the new notes to the database
app.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, databaseNotes);
    res.json(newNote);
});
// Delete route for removing notes from the database
app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, databaseNotes);
    res.json(true);
});
// Listen route for launching the server
app.listen(PORT, () => {
    console.info(`Server is running on => http://localhost:${PORT} <= LAUNCH!`);
});
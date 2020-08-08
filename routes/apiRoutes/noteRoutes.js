//api routes for the app

//require dependancies
const router = require('express').Router();
const {db} = require('../../db/db.json');
const { addNewNote, removeNote} = require('../../lib/notes.js');

//get route that will return all of the notes in db.json.
router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
})

//post route for adding new notes
router.post('/notes', (req, res) => {
    const newNote = addNewNote(req.body, db);
    res.json(newNote);
})

//delete route for getting rid of no longer needed notes
router.delete('/notes/:id', (req, res) => {
    removeNote(req.params.id, db);
    res.json(req.body);
})

module.exports = router;
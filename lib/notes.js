//requiring dependancies
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

//this function searches for a note, given the note's id and returns the note object
function findById(id, noteList) {
    return noteList.filter(note => note.id === id)[0];
}

//this function takes a note that is to be added (body), then generates a unique id using uniqid.
//next, it adds the new note object to the array of notes in memory, then writes that array to db.json
//for permanent storage.
function addNewNote(body, noteList) {
    let newNote = body;
    //generate a new id using uniqid,
    newNote.id = uniqid();
    noteList.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({db: noteList}, null, 2)
    );
    return newNote;
}

//this function takes the id of the note that is to be deleted, finds the note that has that id
//then removes it from the array of notes in memory using splice, then writes the array of 
//remaining notes back to db.json for permanent storage.
function removeNote (id, noteList) {
    const removeThisNote = findById(id, noteList);
    for (let i = 0; i<noteList.length; i++){
        if (noteList[i].id === removeThisNote.id) {
            noteList.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({db: noteList}, null, 2)
            );
        }
    };
}

//exporting functions for use in other parts of the application
module.exports = {
    findById,
    addNewNote,
    removeNote
};
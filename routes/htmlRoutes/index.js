//contains all of the html routes for the app. I didn't break this into separate files like I did with apiRoutes because even with future additions, I think
//the number of html routes will be managable under one file, but it could be broken out in the future if needed.

const path = require('path');
const router = require('express').Router();

//default route to serve up the index.html landing page
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

//serves up the notes.html page which is were all of the fun happens!
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

module.exports = router;
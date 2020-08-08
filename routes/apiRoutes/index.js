//this file isn't really necessary for the current scope of the app, but could be useful as more functionality is added

const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);

module.exports = router;
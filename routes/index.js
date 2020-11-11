const express = require('express');
const router = express.Router();
const notesController = require('../controller/notesController');

router.get("/", notesController.viewNote);
router.post("/notes", notesController.addNote);
router.post("/:id/", notesController.editNote);
router.get("/add", notesController.viewAddedNote);
router.get("/edit", notesController.viewEditedNote);
router.get("/notes", notesController.deleteNote);

module.exports = router;

const express = require('express');
const router = express.Router();
const notesController = require('../controller/notesController');

router.get("/", notesController.viewNote);
router.post("/", notesController.addNote);
router.post("/:id/", notesController.editNote);
router.get("/add", notesController.viewAddedNote);
router.get("/edit", notesController.viewEditedNote);
//router.get("/view", notesController.viewFinishedNote);

module.exports = router;

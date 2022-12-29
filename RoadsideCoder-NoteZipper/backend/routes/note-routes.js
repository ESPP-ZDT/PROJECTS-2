// const { response } = require("express");
const express = require("express");
const noteController = require("../collections/notes/note-controller");

const noteRouter = express.Router();

noteRouter.route("/").get(noteController.getAllNotes);
noteRouter.route("/:noteId").get(noteController.getNoteById);

module.exports = noteRouter;

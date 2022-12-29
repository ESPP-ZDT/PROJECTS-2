// const asynchandler = require("express-async-handler");
const notes = require("./notes");

const getAllNotes = (req, res) => {
  res.status(200).json(notes);
};

const getNoteById = (req, res) => {
  const note = notes.find((n) => n._id === req.params.noteId);
  res.status(200).json(note);
};

module.exports = { getAllNotes, getNoteById };

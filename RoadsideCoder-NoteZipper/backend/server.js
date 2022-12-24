const express = require("express");
const dotenv = require("dotenv");

const notes = require("./data/notes");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

/// routes
app.get("/", (req, res) => {
  res.status(200).send("All ok");
});

app.get("/api/notes", (req, res) => {
  res.status(200).json(notes);
});

app.get("/api/notes/:noteId", (req, res) => {
  const note = notes.find((n) => n._id === req.params.noteId);
  res.status(200).json(note);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));

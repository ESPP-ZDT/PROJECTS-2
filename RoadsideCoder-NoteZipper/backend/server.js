const dotenv = require("dotenv");
dotenv.config();

const notes = require("./data/notes");
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const userRoutes = require("./routes/user-routes");

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

app.use("/api/users", userRoutes);
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// read configs and ENV parameters
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

// connect to data sources
const notes = require("./data/notes");
const connectDB = require("./config/db");
connectDB();

// prepare REST server
const express = require("express");
const app = express();
app.use(express.json());

/// routes
const userRoutes = require("./routes/user-routes");

app.use("/api/users", userRoutes);

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

// error handlers and start app
const { notFound, errorHandler } = require("./middlewares/error-middleware");
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log(`Server started on port ${PORT}`));

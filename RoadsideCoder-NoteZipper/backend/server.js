// read configs and ENV parameters
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

// connect to data sources
const connectDB = require("./config/db");
connectDB();

// prepare REST server
const express = require("express");
const app = express();
app.use(express.json());

/// routes
const userRoutes = require("./routes/user-routes");
const noteRoutes = require("./routes/note-routes");
const rootRoutes = require("./routes/root-routes");
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use("/", rootRoutes);

// error handlers and start app
const { notFound, errorHandler } = require("./middlewares/error-middleware");
const noteRouter = require("./routes/note-routes");
const rootRouter = require("./routes/root-routes");
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log(`Server started on port ${PORT}`));

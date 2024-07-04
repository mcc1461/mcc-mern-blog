import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import path from "path";

// Load environment variables from .env file
dotenv.config();
// Take the PORT and HOST values from the environment variables
const { PORT, HOST } = process.env;

// MongoDB Connection with mongoose library to connect to the database server and use the database in the application
// MONGODB is the connection string to connect to the MongoDB server which is stored in the environment variables
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// This is necessary to resolve the path of the current directory in the server file system to serve the static files
const __dirname = path.resolve();

// This is necessary to create an express application instance to use the express methods and properties to create the server
const app = express();

// This is necessary to serve the static files in the build folder of the client
app.use(express.urlencoded({ extended: true }));
// This is necessary to parse the incoming JSON data
app.use(express.json());
// This is necessary to parse the cookies
app.use(cookieParser());

app.get("/test", (req, res) => {
  res.json({ message: "API is running for MusCo" });
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "../../mcc-mern-blog/blogClient/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../mcc-mern-blog/blogClient/dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(PORT || 8008, () =>
  console.log(`Server Running on http://${HOST || "localhost"}:${PORT || 8008}`)
);

// require('./src/sync')()



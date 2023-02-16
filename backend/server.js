import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const app = express();

app.get("/api/data", (req, res) => {
  res.send("API is running");
});

// deployment

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// deployment

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("server started on port 5000"));

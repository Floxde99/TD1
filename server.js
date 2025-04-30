const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./routers/bookRouter");

const app = express();
app.use(express.json());
app.use(bookRouter);
app.listen(3000, (err) => {
  if (err) {
    console.log("Error starting server:", err);
  } else {
    console.log("Server started on port 3000");
  }
});
mongoose.connect("mongodb://localhost:27017/livres");

app.get("/", (req, res) => {
  res.send("Bonjour, bienvenue sur le serveur de livres !");
});

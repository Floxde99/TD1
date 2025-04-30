console.log("Server is running");
const express = require("express");
const mongoose = require("mongoose");
 const livreRouter = require("./routers/livreRouter");

const app = express();
app.use(express.json());
app.use(livreRouter);
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
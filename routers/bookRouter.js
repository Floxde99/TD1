const bookRouter = require('express').Router();
const bookModel = require('../models/bookModel');
bookRouter.post("/books", async(req, res) => {
    try {
      const book = new bookModel({
        title: req.body.titre,
        author: req.body.auteur,
        publication: req.body.publication,
        genre: req.body.genre,
      });
      await book.save();
      res.json({ message: "livre crée", book: book });
    } catch (error) {
      console.log( error);
      res.json({ message: "Erreur lors de la création du livre" });
    }
  });
  bookRouter.get("/books", async (req, res) => {
    try {
      const book = await bookModel.find();
      res.json({ message: "Liste des livres", book: book });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la récupération des livres" });
    }
  });
  bookRouter.get("/books/id/:id", async (req, res) => {
    try {
        const book = await bookModel.find({ _id: req.params.id });
      res.json({ message: "livre trouvé", book: book });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la récupération du livre" });
    }
  });
bookRouter.get("/books/titre/:titre", async (req, res) => {
    try {
        const book = await bookModel.find({ titre: req.params.titre });
      res.json({ message: "livre trouvé", book: book });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la récupération du livre" });
    }
  });
bookRouter.put("/books/:id", async (req, res) =>  {
    try {
        console.log(req.body);
      const book = await bookModel.updateOne( { _id: req.params.id },req.body);
      res.json({ message: "livre modifié", book: result });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la modification du livre" });
    }})
bookRouter.delete("/books/:id", async (req, res) => {
    try {
      const book = await bookModel.deleteOne({ _id: req.params.id });
      res.json({ message: "livre supprimé", book: book });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la suppression du livre" });
    }
  });
module.exports = bookRouter;
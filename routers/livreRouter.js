const livreRouter = require('express').Router();
const livreSchema = require('../models/livreModel');
livreRouter.post("/livres", async(req, res) => {
    try {
      const livre = new livreSchema({
        titre: req.body.titre,
        auteur: req.body.auteur,
        publication: req.body.publication,
        genre: req.body.genre,
      });
      await livre.save();
      res.json({ message: "livre crée", livre: livre });
    } catch (error) {
      console.log( error);
      res.json({ message: "Erreur lors de la création du livre" });
    }
  });
  livreRouter.get("/livres", async (req, res) => {
    try {
      const livre = await livreSchema.find();
      res.json({ message: "Liste des livres", livre: livre });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la récupération des livres" });
    }
  });
  livreRouter.get("/livres/id/:id", async (req, res) => {
    try {
        const livre = await livreSchema.find({ _id: req.params.id });
      res.json({ message: "Livre trouvé", livre: livre });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la récupération du livre" });
    }
  });
livreRouter.get("/livres/titre/:titre", async (req, res) => {
    try {
        const livre = await livreSchema.find({ titre: req.params.titre });
      res.json({ message: "Livre trouvé", livre: livre });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la récupération du livre" });
    }
  });
livreRouter.put("/livres/:id", async (req, res) =>  {
    try {
      const result = await livreSchema.updateOne(
        { _id: req.params.id },                       
        {
          titre: req.body.titre,
          auteur: req.body.auteur,
          publication: req.body.publication,
          genre: req.body.genre,
        }
      );
      res.json({ message: "Livre modifié", livre: result });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la modification du livre" });
    }})
livreRouter.delete("/livres/:id", async (req, res) => {
    try {
      const livre = await livreSchema.deleteOne({ _id: req.params.id });
      res.json({ message: "Livre supprimé", livre: livre });
    } catch (error) {
      console.log(error);
      res.json({ message: "Erreur lors de la suppression du livre" });
    }
  });
module.exports = livreRouter;
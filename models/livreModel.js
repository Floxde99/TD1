const mongoose = require("mongoose");

const livreSchema = new mongoose.Schema({
   titre: {
      type: String,
      required: [true, "Le titre est requis"],
   },
   auteur: {
      type: String,
      required: [true, "L'auteur est requis"],
   },
   publication: {
      type: Date,
      required: [true, "La date de publication est requise"],
   },
    genre: {
        type: String,
        required: [true, "Le genre est requis"],
    },
})

const userModel = mongoose.model("livres", livreSchema)

module.exports = userModel
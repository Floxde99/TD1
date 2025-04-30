const mongoose = require("mongoose");

const booksModel = new mongoose.Schema({
   title: {
      type: String,
      required: [true, "Le titre est requis"],
   },
   author: {
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

const bookModel = mongoose.model("livres", booksModel)

module.exports = bookModel
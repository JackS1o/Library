const { model, Schema } = require("mongoose");

const booksSchema = new Schema(
  {
    author: { type: String, required: true },
    country: { type: String, required: true },
    imageLink: { type: String, required: true },
    language: { type: String, required: true },
    link: { type: String, required: true },
    pages: { type: Number, required: true },
    title: { type: String, required: true },
    year: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const booksModel = model("books", booksSchema);

module.exports = booksModel;

const booksModel = require("../models/booksModel.js");

const createBooks = async (body) => {
  const book = Promise.all(body.books.map((book) => booksModel.create(book)));
  // const book = await booksModel.create({
  //   author: body.author,
  //   country: body.country,
  //   imageLink: body.imageLink,
  //   language: body.language,
  //   link: body.link,
  //   pages: body.pages,
  //   title: body.title,
  //   year: body.year,
  // });

  return book;
};

module.exports = {
  createBooks,
};

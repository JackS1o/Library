const booksService = require('../services/booksService');

const createBooks = async (req, res) => {
  const { body } = req;

  const book = await booksService.createBooks(body);

  return res.status(201).json(book);
}

module.exports = {
  createBooks,
};

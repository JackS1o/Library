const { Router } = require("express");

const router = Router();

const booksController = require("../controllers/booksController");

router.get("/", booksController.createBooks);

module.exports = router;

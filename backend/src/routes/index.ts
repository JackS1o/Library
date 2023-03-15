import { Router } from 'express';
import BooksController from '../controllers/booksController';
import Book from '../models/booksModel';
import BooksService from '../services/booksService';

const router = Router();

const booksModel = new Book();
const booksService = new BooksService(booksModel);
const booksController = new BooksController(booksService);

router.post("/", (req, res) => booksController.create(req, res));
router.get("/", (req, res) => booksController.read(req, res));

export default router;

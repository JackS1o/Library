"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BooksController {
    constructor(service) {
        this._service = service;
    }
    async create(req, res) {
        const { books } = req.body;
        const book = await this._service.create(books);
        res.status(201).json(book);
    }
    async read(req, res) {
        const books = await this._service.read();
        res.status(200).json(books);
    }
}
exports.default = BooksController;

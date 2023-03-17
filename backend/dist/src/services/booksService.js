"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IBook_1 = require("../interfaces/IBook");
class BooksService {
    constructor(model) {
        this.book = model;
    }
    async create(obj) {
        const parsed = Promise.all(obj.map(async (book) => {
            const parsed = IBook_1.BookZodSchema.safeParse(book);
            if (!parsed.success) {
                throw new Error(parsed.error.message);
            }
            return await this.book.create(book);
        }));
        return parsed;
    }
    async read() {
        const books = await this.book.read();
        return books;
    }
}
exports.default = BooksService;

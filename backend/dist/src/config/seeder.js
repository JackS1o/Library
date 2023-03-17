"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const books_1 = __importDefault(require("../data/books"));
const connection_1 = __importDefault(require("./connection"));
const booksModel_1 = __importDefault(require("../models/booksModel"));
dotenv_1.default.config();
(0, connection_1.default)();
const Books = new booksModel_1.default();
const importBooks = async () => {
    try {
        await Books.model.deleteMany({});
        await Books.model.insertMany(books_1.default);
        console.log('Data Imported');
        process.exit();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};
const deleteProducts = async () => {
    try {
        await Books.model.deleteMany({});
        console.log('Data destroyed');
        process.exit();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};
// importProducts();
// deleteProducts();
switch (process.argv[2]) {
    case '-d': {
        deleteProducts();
        break;
    }
    default: {
        importBooks();
    }
}

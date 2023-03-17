"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoModel_1 = __importDefault(require("./mongoModel"));
const booksSchema = new mongoose_1.Schema({
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number,
}, {
    versionKey: false,
});
class Book extends mongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('Book', booksSchema)) {
        super(model);
    }
}
exports.default = Book;

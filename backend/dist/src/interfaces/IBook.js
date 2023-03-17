"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookZodSchema = void 0;
const zod_1 = require("zod");
const BookZodSchema = zod_1.z.object({
    author: zod_1.z.string({
        required_error: 'Author is required',
        invalid_type_error: 'Author must be a string',
    }),
    country: zod_1.z.string({
        required_error: 'Country is required',
        invalid_type_error: 'Country must be a string',
    }),
    imageLink: zod_1.z.string({
        required_error: 'Image link is required',
        invalid_type_error: 'Image link must be a string',
    }),
    language: zod_1.z.string({
        required_error: 'Language is required',
        invalid_type_error: 'Language must be a string',
    }),
    link: zod_1.z.string({
        required_error: 'Link is required',
        invalid_type_error: 'Link must be a string',
    }),
    pages: zod_1.z.number({
        required_error: 'Pages is required',
        invalid_type_error: 'Pages must be a number',
    }),
    title: zod_1.z.string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string',
    }),
    year: zod_1.z.number({
        required_error: 'Year is required',
        invalid_type_error: 'Year must be a number',
    }),
});
exports.BookZodSchema = BookZodSchema;

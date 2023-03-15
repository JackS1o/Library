import { model as mongooseCreateModel, Schema } from 'mongoose';
import MongoModel from './mongoModel';
import { IBook } from '../interfaces/IBook';

const booksSchema = new Schema<IBook>({
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

class Book extends MongoModel<IBook> {
  constructor(model = mongooseCreateModel<IBook>('Book', booksSchema)) {
    super(model);
  }
}

export default Book;

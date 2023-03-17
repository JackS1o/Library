import { DuplicateEntry, EntityNotFound } from '../errors/catalog';
import { BookZodSchema, IBook } from '../interfaces/IBook';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class BooksService implements IService<IBook> {
  book:IModel<IBook>;

  constructor(model:IModel<IBook>) {
    this.book = model;
  }

  public async create(obj:any):Promise<IBook> {
    const books = await this.read();
    if (books.length > 0) {
      throw new DuplicateEntry('Book already exists');
    }
    const parsed = Promise.all(obj.map(async(book:any) => {
      const parsed = BookZodSchema.safeParse(book);
      if (!parsed.success) {
        throw new Error('Invalid book');
      }
      return await this.book.create(book);
    }));
    return parsed as unknown as Promise<IBook>;
  }

  public async read():Promise<IBook[]> {
    const books = await this.book.read();
    return books as unknown as Promise<IBook[]>;
  }

  public async readOne(_id:string):Promise<IBook> {
    const book = await this.book.readOne(_id);
    if (!book) {
      throw new EntityNotFound('Book not found');
    }
    return book as unknown as Promise<IBook>;
  }
}

export default BooksService;


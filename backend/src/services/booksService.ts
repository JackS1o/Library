import { BookZodSchema, IBook } from '../interfaces/IBook';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class BooksService implements IService<IBook> {
  book:IModel<IBook>;

  constructor(model:IModel<IBook>) {
    this.book = model;
  }

  public async create(obj:any):Promise<IBook> {
    const parsed = Promise.all(obj.map(async(book:any) => {
      const parsed = BookZodSchema.safeParse(book);
      if (!parsed.success) {
        throw new Error(parsed.error.message);
      }
      return await this.book.create(book);
    }));
    return parsed as unknown as Promise<IBook>;
  }

  public async read():Promise<IBook[]> {
    const books = await this.book.read();
    return books;
  }
}

export default BooksService;


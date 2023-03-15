import { Request, Response } from 'express';
import { IBook } from '../interfaces/IBook';
import { IService } from '../interfaces/IService';

class BooksController {
  private _service:IService<IBook>;

  constructor(service:IService<IBook>) {
    this._service = service;
  }

  public async create(req:Request, res:Response):Promise<void> {
    const { books } = req.body;
    const book = await this._service.create(books);
    res.status(201).json(book);
  }
}

export default BooksController;


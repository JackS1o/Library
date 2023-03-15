import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  constructor(private model: Model<T>) {}

  public async create(obj:T):Promise<T> {
    return this.model.create({ ...obj });
  }

  public async read():Promise<T[]> {
    return this.model.find();
  }
}

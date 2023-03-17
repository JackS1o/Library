import { isValidObjectId, Model } from "mongoose";
import { ErrorTypes } from "../errors/catalog";
import { IModel } from "../interfaces/IModel";

export default abstract class MongoModel<T> implements IModel<T> {
  constructor(private model: Model<T>) {}

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this.model.find();
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this.model.findOne({ _id });
  }
}

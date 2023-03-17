export interface IModel<T> {
  read(): Promise<T[] | null>;
  create(obj: T): Promise<T>;
  readOne(_id: string): Promise<T | null>;
}

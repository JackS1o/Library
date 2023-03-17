import * as sinon from "sinon";
import chai from "chai";
import { Model } from "mongoose";
import Book from "../../../models/booksModel";
import { bookMock, bookMockWithId } from "../../mock/booksMock";

const { expect } = chai;

describe("Books Model", () => {
  const bookModel = new Book();
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    sinon.stub(bookModel, "create").resolves(bookMockWithId);
    sinon.stub(bookModel, "readOne").resolves(bookMockWithId);
    sinon.stub(bookModel, "read").resolves([bookMockWithId]);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Create Book", () => {
    it("Success", async () => {
      const book = await bookModel.create(bookMock);

      expect(book).to.be.deep.equal(bookMockWithId);
    });
  });

  describe("Read Book", () => {
    it("Success", async () => {
      const book = await bookModel.readOne(bookMockWithId._id);

      expect(book).to.be.deep.equal(bookMockWithId);
    });
  });

  describe("ReadOne Book", () => {
    it("Success", async () => {
      const books = await bookModel.read();

      expect(books).to.be.deep.equal([bookMockWithId]);
    });
  });
});

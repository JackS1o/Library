import * as sinon from "sinon";
import chai from "chai";
import Book from "../../../models/booksModel";
import BooksService from "../../../services/booksService";
import { bookMock, bookMockWithId } from "../../mock/booksMock";
import { EntityNotFound } from "../../../errors/catalog";

const { expect } = chai;

describe("Books Service", () => {
  const bookModel = new Book();
  const bookService = new BooksService(bookModel);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    sinon.stub(bookModel, "create").resolves(bookMockWithId);
    sinon
      .stub(bookModel, "readOne")
      .resolves(bookMockWithId)
      .onCall(0)
      .resolves(bookMockWithId)
      .onCall(1)
      .resolves(null);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Create Book", () => {
    beforeEach(() => {
      sinon.stub(bookService, "create").resolves(bookMock);
    });

    it("Success", async () => {
      const book = await bookModel.create(bookMock);

			expect(book).to.be.deep.equal(bookMockWithId);
    });
  });

  describe("ReadOne Book", () => {
    beforeEach(() => {
      sinon.stub(bookService, "readOne").resolves(bookMock);
    });

    it("Success", async () => {
      const book = await bookModel.readOne(bookMockWithId._id);

      expect(book).to.be.deep.equal(bookMockWithId);
    });

    it('Failure', async () => {
			let error = 'Book not found';

			try {
				await bookService.readOne(bookMockWithId._id);
			} catch (err:any) {
				error = err;
			}

			expect(error).to.be.deep.equal(new EntityNotFound('Book not found').message);
		});
  });
});

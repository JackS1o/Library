import * as sinon from "sinon";
import chai from "chai";
import { Request, Response } from "express";
import BooksController from "../../../controllers/booksController";
import BooksService from "../../../services/booksService";
import BooksModel from "../../../models/booksModel";
import { bookMock, bookMockWithId } from "../../mock/booksMock";

const { expect } = chai;

// describe('Car Controller', () => {
//   const carModel = new CarsModel();
//   const carService = new CarsService(carModel);
//   const carController = new CarsController(carService);

//   const req = {} as Request;
//   const res = {} as Response;

//   beforeEach(() => {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns(res);
//   });

//   afterEach(() => {
//     sinon.restore()
//   });

//   describe('Create Car', () => {
//     beforeEach(() => {
//       sinon.stub(carService, 'create').resolves(carMock);
//     })

//     it('Success', async () => {

//       req.body = carMock;
//       await carController.create(req, res);

//       const statusStub = res.status as sinon.SinonStub;
//       expect(statusStub.calledWith(201)).to.be.true;

//       const jsonStub = res.json as sinon.SinonStub;
//       expect(jsonStub.calledWith(carMock)).to.be.true;
//     });
//   });

//   describe('ReadOne Car', () => {
//     beforeEach(() => {
//       sinon.stub(carService, 'readOne').resolves(carMock);
//     })

//     it('Success', async () => {
//       req.params = { id: carMockWithId._id };
//       await carController.readOne(req, res);

//       expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
//       expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
//     });
//   });

//   describe('Update Car', () => {
//     it('Success', async () => {
//       sinon.stub(carService, 'update').resolves(carMockWithId)

//       await carController.update(req, res)

//       expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
//       expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
//     })
//   })
// });

describe("Books Controller", () => {
  describe("Create Book", () => {
    const booksModel = new BooksModel();
    const booksService = new BooksService(booksModel);
    const booksController = new BooksController(booksService);

    const req = {} as Request;
    const res = {} as Response;

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    afterEach(() => {
      sinon.restore();
    });

    it("Deve retornar status 200", async () => {
      sinon.stub(booksService, "read").resolves(bookMock as any);

      await booksController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });

    it("Deve retornar um array de livros", async () => {
      sinon.stub(booksService, "read").resolves(bookMock as any);

      await booksController.read(req, res);

      expect((res.json as sinon.SinonStub).calledWith(bookMock)).to.be.true;
    });
  });

  describe("Read Book", () => {
    const booksModel = new BooksModel();
    const booksService = new BooksService(booksModel);
    const booksController = new BooksController(booksService);

    const req = {} as Request;
    const res = {} as Response;

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    afterEach(() => {
      sinon.restore();
    });

    it("Deve retornar status 201", async () => {
      sinon.stub(booksService, "create").resolves(bookMock as any);

      req.body = bookMock;
      await booksController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    });

    it("Deve retornar um livro", async () => {
      sinon.stub(booksService, "create").resolves(bookMock as any);

      req.body = bookMock;
      await booksController.create(req, res);

      expect((res.json as sinon.SinonStub).calledWith(bookMock)).to.be.true;
    });
  });

  describe("ReadOne Book", () => {
    const booksModel = new BooksModel();
    const booksService = new BooksService(booksModel);
    const booksController = new BooksController(booksService);

    const req = {} as Request;
    const res = {} as Response;

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    afterEach(() => {
      sinon.restore();
    });

    it("Deve retornar status 200", async () => {
      sinon.stub(booksService, "readOne").resolves(bookMockWithId as any);

      req.params = { id: bookMockWithId._id };
      await booksController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });

    it("Deve retornar um livro", async () => {
      sinon.stub(booksService, "readOne").resolves(bookMockWithId as any);

      req.params = { id: bookMockWithId._id };
      await booksController.readOne(req, res);

      expect((res.json as sinon.SinonStub).calledWith(bookMockWithId)).to.be.true;
    });
  });
});

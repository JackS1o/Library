import { Request, Response } from "express";
import booksController from "../../../controllers/booksController";
import booksService from "../../../services/booksService";

describe("Teste booksController", () => {
  describe("Rota GET", () => {
    it("Deve retornar uma lista de livros", async () => {
      const books = [
        {
          id: "1",
          title: "Livro 1",
        },
        {
          id: "2",
          title: "Livro 2",
        },
      ];
      const serviceMock = {
        read: () => Promise.resolve(books),
      };
      const controller = new booksController(
        new booksService(serviceMock as any)
      );
      const req = {} as Request;
      const res = {
        status: (code: number) => ({
          json: (data: any) => {
            expect(code).toBe(200);
            expect(data).toBe(books);
          },
        }),
      } as Response;
      await controller.read(req, res);
    });
  });
});

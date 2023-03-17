import { IBook } from "../../interfaces/IBook";

const bookMock: IBook = {
  author: "J.K. Rowling",
  country: "United Kingdom",
  imageLink: "http://books.google.com/books/content?id=OZz7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  language: "English",
  link: "http://books.google.com/books?id=OZz7DwAAQBAJ&dq=Harry+Potter&hl=&source=gbs_api",
  pages: 309,
  title: "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
  year: 2005
}

const bookMockWithId: IBook & { _id:string } = {
  _id: "5f9f1b9b9c9d440017a5c1b5",
  author: "J.K. Rowling",
  country: "United Kingdom",
  imageLink: "http://books.google.com/books/content?id=OZz7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  language: "English",
  link: "http://books.google.com/books?id=OZz7DwAAQBAJ&dq=Harry+Potter&hl=&source=gbs_api",
  pages: 309,
  title: "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
  year: 2005
}

export {bookMock, bookMockWithId};

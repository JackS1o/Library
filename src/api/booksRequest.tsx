import axios from "axios";
import books from "../data/books.json";

interface IBook {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  _id: string;
}

const booksRequest = async () => {
  const response = await axios
    .get<IBook[]>("http://localhost:3001/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

const booksRequestById = async (id: string | undefined) => {
  const response = await axios
    .get(`http://localhost:3001/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return response;
};

const seedBooks = async () => {
  const response = await axios
    .post("http://localhost:3001/", books)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

seedBooks();

export { booksRequest, booksRequestById };

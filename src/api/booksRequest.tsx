import axios from "axios";

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

export default booksRequest;

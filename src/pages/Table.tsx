import React, { useEffect, useState } from "react";
import booksRequest from "../api/booksRequest";

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

function TablePage() {
  const [data, setdata] = useState<IBook[]>([]);
  const [books, setBooks] = useState<IBook[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    booksRequest().then((res) => {
      if (res) {
        setdata(res);
      }
    });
    setBooks(data);
  }, []);

  const inputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  }

  const searchBook = () => {
    const filteredBooks = data.filter((book) => {
      return (
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.language.toLowerCase().includes(search.toLowerCase())
      );
    });
    setBooks(filteredBooks);
  };

  return (
    <div>
      <header>
        <h1>Beon</h1>
        <label>
          Search
          <input
            type="text"
            placeholder="Busque livros pelo título, autor ou idioma"
            value={search}
            onChange={(event) => inputSearch(event)}
          />
        </label>
        <button
          type="button"
          onClick={searchBook}
        >Buscar</button>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Livro</th>
              <th>Autor</th>
              <th>Idioma</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.language}</td>
                <td>{book.year}</td>
                <td>Ações</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default TablePage;

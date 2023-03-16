import React, { useEffect, useState } from "react";
import booksRequest from "../api/booksRequest";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, createTheme, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

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

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#60378a",
    },
  },
});

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
  };

  const searchBook = () => {
    const filteredBooks = data.filter((book) => {
      return (
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.language.toLowerCase().includes(search.toLowerCase())
      );
    });
    setBooks(filteredBooks);
    setSearch("");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#d9d9d9" }}>
          <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .MuiTextField-root": { m: 5, width: "75vw" },
              }}>
            <Typography variant="h4" sx={{ color: "#60378a" }}>
              Beon
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <ThemeProvider theme={buttonTheme}>
                <TextField
                  id="standard-textarea"
                  placeholder="Busque livros pelo título, autor ou idioma"
                  variant="standard"
                  color="primary"
                  value={search}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    inputSearch(event)
                  }
                  sx={{
                    backgroundColor: "#fff",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                />
              </ThemeProvider>
            </Box>
            <ThemeProvider theme={buttonTheme}>
              <Button type="button" variant="contained" onClick={searchBook}>
                Buscar
              </Button>
            </ThemeProvider>
          </Toolbar>
        </AppBar>
      </Box>
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

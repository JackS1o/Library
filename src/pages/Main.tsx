import React, { useEffect, useState } from "react";
import { booksRequest } from "../api/booksRequest";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, createTheme, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import TableBooks from "../components/TableBooks";
import IBook from "../interface/books";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#60378a",
    },
  },
});

function Main() {
  const [data, setdata] = useState<IBook[]>([]);
  const [books, setBooks] = useState<IBook[]>([]);
  const [search, setSearch] = useState({
    search: "",
    minYear: "",
    maxYear: "",
  });

  useEffect(() => {
    booksRequest().then((res) => {
      if (res) {
        setdata(res);
        setBooks(res);
      }
    });
  }, []);

  const inputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearch({
      search: name === "search" ? value : search.search,
      minYear: name === "minYear" ? value : search.minYear,
      maxYear: name === "maxYear" ? value : search.maxYear,
    });
  };

  const searchBook = () => {
    const filteredBooks = data.filter((book) => {
      return (
        book.title.toLowerCase().includes(search.search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.search.toLowerCase()) ||
        book.language.toLowerCase().includes(search.search.toLowerCase())
      );
    });
    if (search.minYear.length && !search.maxYear.length) {
      return alert("Preencha o ano máximo");
    } else {
      const filteredBooksByYear = filteredBooks.filter((book) => {
        return (
          book.year >= parseInt(search.minYear) &&
          book.year <= parseInt(search.maxYear)
        );
      });
      setBooks(filteredBooksByYear);
    }
    setBooks(filteredBooks);
    setSearch({
      search: "",
      minYear: "",
      maxYear: "",
    });
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#d9d9d9" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& .MuiTextField-root": { m: 5, width: "75vw" },
            }}
          >
            <Typography variant="h4" sx={{ color: "#60378a" }}>
              Beon
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <ThemeProvider theme={buttonTheme}>
                <TextField
                  id="standard-textarea"
                  placeholder="Busque livros pelo título, autor ou idioma"
                  variant="standard"
                  color="primary"
                  name="search"
                  value={search.search}
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
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "1.5em",
            }}
          >
            <ThemeProvider theme={buttonTheme}>
              <TextField
                id="standard-textarea"
                type={"number"}
                label="Filtrar ano da publicação"
                placeholder="Busque livros pelo ano"
                variant="standard"
                color="primary"
                name="minYear"
                value={search.minYear}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputSearch(event)
                }
                sx={{ marginRight: "5em" }}
              />
              <TextField
                id="standard-textarea"
                type={"number"}
                label="Até"
                placeholder="Busque livros pelo ano"
                variant="standard"
                color="primary"
                name="maxYear"
                value={search.maxYear}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputSearch(event)
                }
                sx={{ marginLeft: "5em" }}
              />
              <Typography variant="h6" sx={{ marginLeft: "5em", color: "#000" }}>
                {books.length} resultados encontrados
              </Typography>
            </ThemeProvider>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <TableBooks books={books} />
      </Box>
    </Box>
  );
}

export default Main;

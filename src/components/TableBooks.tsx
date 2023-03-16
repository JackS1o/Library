import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableBooks({ books }: { books: any }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <strong>Livro</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Autor</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Idioma</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Ano</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Ações</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books?.map((book: any) => (
            <TableRow key={book.id}>
              <TableCell align="center">{book.title}</TableCell>
              <TableCell align="center">{book.author}</TableCell>
              <TableCell align="center">{book.language}</TableCell>
              <TableCell align="center">{book.year}</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableBooks;

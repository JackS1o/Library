import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, Pagination, PaginationItem, Stack } from "@mui/material";
import usePagination from "../hooks/usePagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function TableBooks({ books }: { books: any }) {
  const { currentData, currentPage, goToPage, totalPages } = usePagination(
    books,
    7
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
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
            {currentData?.map((book: any) => (
              <TableRow key={book.id}>
                <TableCell align="center">{book.title}</TableCell>
                <TableCell align="center">{book.author}</TableCell>
                <TableCell align="center">{book.language}</TableCell>
                <TableCell align="center">{book.year}</TableCell>
                <TableCell align="center">
                  <Link>Detalhes</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => goToPage(value)}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </>
  );
}

export default TableBooks;

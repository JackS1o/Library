import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { booksRequestById } from "../api/booksRequest";
import IBook from "../interface/books";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    booksRequestById(id).then((res) => {
      setBook(res);
    });
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <img
        src={
          book?.imageLink.includes("https")
            ? book?.imageLink
            : "https://profissionaisdolivro.com.br/assets/newstyle/banner-image-capa-5037dd1cb41e039d3e950d6b1f2c04a762efebbb6ad40117cbda1cd9161f876b.png"
        }
        alt="book cover"
        style={{ width: "200px", height: "200px" }}
      />
      <h1 style={{ padding: "20px" }}>Título: {book?.title}</h1>
      <h3 style={{ padding: "20px" }}>Autor: {book?.author}</h3>
      <p style={{ padding: "10px" }}>
        <strong>País:</strong> {book?.country}
      </p>
      <p style={{ padding: "10px" }}>
        <strong>Língua: </strong>
        {book?.language}
      </p>
      <p style={{ padding: "10px" }}>
        <strong>Número de páginas: </strong>
        {book?.pages}
      </p>
      <p style={{ padding: "10px" }}>
        <strong>Ano: </strong>
        {book?.year}
      </p>
    </Box>
  );
}

export default BookDetails;

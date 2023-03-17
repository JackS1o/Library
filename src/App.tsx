import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

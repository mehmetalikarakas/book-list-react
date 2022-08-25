import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);

  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title">{book.ad}</div>
      <div className="author">{book.yazar}</div>
    </li>
  );
}

export default BookDetails;

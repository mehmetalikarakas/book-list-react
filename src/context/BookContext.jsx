import React, { createContext, useReducer, useState } from "react";
import { BookRecuder } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookRecuder, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

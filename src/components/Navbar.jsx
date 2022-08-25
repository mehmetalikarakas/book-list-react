import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Kitap Listesi</h1>
      <p>Şuan {books.length} adet kitap bulunuyor.</p>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddNewItem from "./addnewitem/addnewitem";
import Admin from "./admin/admin";
import Edit from "./edit/edit";
import ShoppingCart from "./shoppingcart/shoppingcart";
import BookDetails from "./bookdetails/bookdetails";
import HomePage from "./homepage/homepage";
import SignIn from "./signin/signin";
import Navbar from "./navbar/navbar";
import Books from "./db"
import AllBooks from "./allbooks/allbooks";
import Wishlist from "./wishlist/wishilst";
import Footer from "./footer/footer";
import './app.css'

const App = () => {

  const [books, setBooks] = useState(Books);
  const [user, setUser] = useState("");


  const onWishlist = (book) => {
    const newBooks = [...books];
    const index = newBooks.indexOf(book);
    newBooks[index].wishlist = true;
    setBooks(newBooks);
  };

  const onCart = (book) => {
    const newBooks = [...books];
    const index = newBooks.indexOf(book);
    newBooks[index].isInCart =  true;
    newBooks[index].count++;
    setBooks(newBooks);
  };



  const handleRemoveItem = async (book) => {
    const newBooks = [...books];
    const index = newBooks.indexOf(book);
    newBooks[index].isInCart = false;
    newBooks[index].wishlist = false;
    newBooks[index].count = 1;
    setBooks(newBooks);
  };

  const handleDelete = async (book) => {
    const newBooks = [...books];
    const index = newBooks.indexOf(book);
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleIncrement = (book) => {
    const newBooks = [...books];
    const index = newBooks.indexOf(book);
    newBooks[index].count++;
    setBooks(newBooks);
  };

  const handleDecrement = (book) => {
    const newBooks = [...books];
    const index = newBooks.indexOf(book);
    if (newBooks[index].count > 1) {
      newBooks[index].count--;
    }
    setBooks(newBooks);
  };

  return (
    <React.Fragment>
      <Navbar books={books} user={user} setUser={setUser} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onSave={onCart} books={books} />}
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route
            path="/admin"
            element={<Admin />}
          />
          <Route
            path="/admin/edit"
            element={<Edit books={books} onDelete={handleDelete} />}
          />
          <Route
            path="/allbooks"
            element={<AllBooks books={books} />}
          />
          <Route
            path="/admin/addnewitem"
            element={<AddNewItem books={books} setBooks={setBooks} />}
          />
          <Route
            path="/bookdetails/:id"
            element={<BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />}
          />

          <Route
            path="allbooks/bookdetails/:id"
            element={<BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />}
          />
          <Route
            path="wishlist/bookdetails/:id"
            element={<BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist books={books} onDelete={handleRemoveItem} />}
          />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart
                books={books}
                onSave={onCart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleRemoveItem}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;


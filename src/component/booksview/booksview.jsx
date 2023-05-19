import React from 'react';
import './booksview.css';
import { Link } from 'react-router-dom';
import Books from '../db';

const BooksView = ({ books }) => {
    const booksList = books.length > 0 ? books : Books;
  
    return (
        <section className="most-books">
            <div className="container" id="Scicence">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Most<b> Bought Books</b></h2>
                    </div>
                    <div className="books">
                        {booksList.map((item) => (
                            <div className="book" key={item.id}>
                                <Link to={`./bookdetails/${item.id}`}><img src={item?.url} alt='book' loading="lazy"/></Link>
                                <div className="thumb-content">
                                    <h5>{item.name}</h5>
                                    <p className="item-price">
                                        {item.price}$
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>);
}

export default BooksView;


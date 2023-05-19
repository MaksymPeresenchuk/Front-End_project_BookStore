import React from 'react'
import { useState } from 'react';
import './allbooks.css'
import { Link } from 'react-router-dom'
import Books from '../db';

const AllBooks = ({ books }) => {

    const booksList = books.length > 0 ? books : Books;

    const [selectedBooks, setSelectedBooks] = useState(booksList)


    let selected = [];
    const BooksNameOptions = [
        {
            value: "George Orwell",
            text: "George Orwell"
        },
        {
            value: "Albert Camus",
            text: "Albert Camus"
        },
        {
            value: "Erich Maria Remarque",
            text: "Erich Maria Remarque"
        },
        {
            value: "Ernest Hemingway",
            text: "Ernest Hemingway"
        },
        {
            value: "F. Scott Fitzgerald",
            text: "F. Scott Fitzgerald"
        },
        {
            value: "Franz Kafka",
            text: "Franz Kafka"
        },
        {
            value: "Jean-Paul Sartre",
            text: "Jean-Paul Sartre"
        },
        {
            value: "James Joyce",
            text: "James Joyce"
        },
        {
            value: "Gabriel García Márquez",
            text: "Gabriel García Márquez"
        },
        {
            value: "Hermann Hesse",
            text: "Hermann Hesse"
        },
        {
            value: "Antoine de Saint-Exupéry",
            text: "Antoine de Saint-Exupéry"
        }
    ]

    const priceOptions = [
        {

            value: 5,
            text: "0 - 5$"
        },
        {

            value: 10,
            text: "5$ - 10$"
        },
        {

            value: 20,
            text: "10$ - 20$"
        }
    ]


    const handleSelectName = (e) => {
        if (e.target.value === "All Books") {
            setSelectedBooks(booksList)
        } else {
            selected = books.filter((book) => book.author === e.target.value)
            setSelectedBooks(selected)
        }
    }

    const handleSelectPrice = (e) => {
     
        if (e.target.value === "Price") {
            setSelectedBooks(selected)
        }
        else {
            const selectedwithPrice = selectedBooks.length > 0 ?
                selectedBooks.filter((book) => book.price <= e.target.value)
                : books.filter((book) => book.price <= e.target.value)
            setSelectedBooks(selectedwithPrice)
        }
    }

    const handleReset = () => {
        setSelectedBooks(books)
    }

    return (<>
        <section className="module-small mt-5">
            <div className="container">
                <form className="row  mx-auto">
                    <div className="col-sm-4 mb-3">
                        <select className="form-control" onChange={handleSelectName}>
                            <option>All Books</option>
                            {BooksNameOptions.map((option) => {
                                return <option key={option.value} value={option.value}>
                                    {option.text}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <select className="form-control" onChange={handleSelectPrice}>
                            <option>Price</option>
                            {priceOptions.map((option) => {
                                return <option key={option.value} value={option.value}>
                                    {option.text}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <button className="btn btn-danger btn-round btn-g" type="submit" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </section>
        <section className="module-large mx-auto">
            <div className="container">
                <div className="row mx-auto">
                    <div className="allItems">
                        {selectedBooks.map((book) => (
                            <div className="shop-items">
                                <div className="shop-item-image" key={book.id}>
                                    <Link to={`./bookdetails/${book.id}`}>
                                        <img src={book.url} alt='book' loading='lazy' />
                                        <i className="fas fa-cart-shopping"></i>
                                    </Link>
                                </div>
                                <div className="shop-item-detail">
                                    <div className='d-flex justify-content-between mx-2 mt-1'>
                                        <h5 className="shop-item-title">{book.name}</h5>
                                        <h5 className="shop-item-price">{book.price}$</h5>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    </>
    );
}

export default AllBooks;

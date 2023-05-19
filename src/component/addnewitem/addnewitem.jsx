import React, { useState } from 'react';
import "./addnewitem.css";
import Books from '../db';
import Alert from '../alert/alert';

const AddNewItem = () => {



    const [newbook, setNewBook] = useState({
        name: "",
        price: "",
        id: "",
        url: ""
    });

    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        setNewBook({
            ...newbook, [e.target.name]: e.target.value,
        });
    };

    const resetInputField = () => {
        setNewBook({
            name: "",
            price: "",
            id: "",
            url: ""
        });
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        Books.push(newbook);
        setAlert(true);
    };

    const handleReset = (e) => {
        e.preventDefault();
        resetInputField();
    }

    return (
        <React.Fragment>
            {alert ?
                <Alert message={"Book added successfully!"} />
                : null}
            <div className="title my-3 text-center">
                <h2>Add New<b>Book</b></h2>
            </div>
            <form className="editbooks" onSubmit={handleSubmit}>
                <div className="mb-3 itemdata">
                    <label htmlFor="productName" className="form-label">
                        Book name
                    </label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        value={newbook.name}
                        onChange={handleChange}

                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3 itemdata">
                    <label htmlFor="productPrice" className="form-label">
                        Product price
                    </label>
                    <input
                        name="price"
                        value={newbook.price}
                        onChange={handleChange}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mb-3 itemdata">
                    <label htmlFor="productPrice" className="form-label">
                        Image url
                    </label>
                    <input
                        name="url"
                        value={newbook.url}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3 itemdata">
                    <label htmlFor="productPrice" className="form-label">
                        Book Id
                    </label>
                    <input
                        name="id"
                        value={newbook.id}
                        onChange={handleChange}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="itemdata d-inline-flex">
                    <button type="submit" className="btn btn-danger px-5 mx-2 rounded-pill ">
                        Add
                    </button>
                    <button onClick={resetInputField} className="btn btn-danger px-5 rounded-pill" onSubmit={handleReset}>
                        Reset
                    </button>
                </div>
            </form>
        </React.Fragment>);

}

export default AddNewItem;
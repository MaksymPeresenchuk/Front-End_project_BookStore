import React from 'react';
import BooksView from '../booksview/booksview';


const HomePage = ({books }) => {
    return(
        <>
        <BooksView books={books}  />
        </>
    )
}




export default HomePage;


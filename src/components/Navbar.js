import React, {useContext} from 'react'
import {BooksContext} from "../contexts/BookContext";
const Navbar = () => {
    const {book} = useContext(BooksContext);
    return (
        <div className="navbar">
            <h1>Abhishek Ninja</h1>
            <p>Total No of books available to read {book.length}</p>
        </div>
    )
}

export default Navbar

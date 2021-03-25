import React, { useContext } from 'react'
import { BooksContext } from '../contexts/BookContext'
import BookDetails from './BookDetails';

const BookList = () => {
    const {book} = useContext(BooksContext);
    return (
        <div>
            <ul>
            {book.map(books => {
                return( <BookDetails books={books} key={books.id} />)
            })}
            </ul>
        </div>
    )
}

export default BookList

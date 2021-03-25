import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BookContext'

const BookDetails = ({ books }) => {
  const { delBook } = useContext(BooksContext);
  return (
    <li onClick={() => delBook(books.id)}>
      <div className="title">{books.title}</div>
      <div className="author">{books.author}</div>
    </li>
  );
}

export default BookDetails;
import React, {useContext, useState} from 'react'
import { BooksContext } from '../contexts/BookContext';

const Form = () => {
    const {addBook} = useContext(BooksContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required/>
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required/>
                <input type="submit" value="add book"  />
            </form>
        </div>
    )
}

export default Form

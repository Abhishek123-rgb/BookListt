import React from 'react'
import BookList from './components/BookList'
import Form from './components/Form'
import Navbar from './components/Navbar'
import BooksContextProvider from './contexts/BookContext'

const App = () => {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar/>
        <BookList/>
        <Form/>
      </BooksContextProvider>
    </div>
  )
}

export default App

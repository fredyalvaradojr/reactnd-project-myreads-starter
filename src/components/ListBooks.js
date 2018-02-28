import React from 'react';
import { Link } from 'react-router-dom';
import ListBookContent from './ListBookContent';
import '../App.css';

const ListBook = (props) =>  {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <ListBookContent
            title="Currently Reading"
            bookStateList={props.bookList.filter(book => book.shelf === 'currentlyReading')}
            updateReadingList={(book, e) => props.updateReadingList(book, e)}
          />
          <ListBookContent
            title="Want to Read"
            bookStateList={props.bookList.filter(book => book.shelf === 'wantToRead')}
            updateReadingList={(book, e) => props.updateReadingList(book, e)}
          />
          <ListBookContent
            title="Read"
            bookStateList={props.bookList.filter(book => book.shelf === 'read')}
            updateReadingList={(book, e) => props.updateReadingList(book, e)}
          />
        </div>
      </div>
      <div className="open-search">
      <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

export default ListBook;
import React from 'react';
import BookTemplate from './BookTemplate';

const ListBookContent = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { props.bookStateList.map(book => <BookTemplate key={book.id} updateReadingList={(book, e) => props.updateReadingList(book, e)} {...book} />) }
        </ol>
      </div>
    </div>
  );
}

export default ListBookContent;
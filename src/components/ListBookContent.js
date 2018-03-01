import React from 'react';
import PropTypes from 'prop-types';
import BookTemplate from './BookTemplate';

const ListBookContent = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { props.bookStateList.map(book => <BookTemplate key={book.id} updateReadingList={(book, e) => props.updateReadingList(book, e)} thisBookInfo={book} />) }
        </ol>
      </div>
    </div>
  );
}

ListBookContent.PropTypes = {
  bookStateList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateReadingList: PropTypes.func.isRequired
}

export default ListBookContent;
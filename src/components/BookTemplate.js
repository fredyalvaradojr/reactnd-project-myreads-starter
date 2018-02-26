import React from 'react';

const BookTemplate = (props) => {
  console.debug(props, props.shelf);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.imageLinks.thumbnail}")` }} />
          <div className="book-shelf-changer">
            <select value={ props.shelf !== undefined ? props.shelf : 'none'} onChange={(e) => props.updateReadingList(props, e)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{ props.authors !== undefined ? props.authors.map( (author, index) => (index === (props.authors.length-1)) ? `${author}` : `${author}, ` ) : '' }</div>
      </div>
    </li>
  );
}

export default BookTemplate;
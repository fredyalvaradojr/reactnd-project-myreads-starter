import React from 'react';

const BookTemplate = (props) => {

  let shelfStatus;
  if (props.bookListInformation !== undefined) {
    const shelfStatusItem = props.bookListInformation.filter(b =>  b.title === props.title );
    shelfStatus = shelfStatusItem.length === 0 ? 'none' : shelfStatusItem[0].shelf;
  }
  else {
    shelfStatus = props.shelf !== undefined ? props.shelf : 'none';
  }

  const thumbnail = props.imageLinks !== undefined ? props.imageLinks.thumbnail : '';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }} />
          <div className="book-shelf-changer">
            <select value={shelfStatus} onChange={(e) => props.updateReadingList(props, e)}>
              <option value="moveTo" disabled>Move to...</option>
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
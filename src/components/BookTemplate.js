import React from 'react';

const BookTemplate = (props) => {
  let shelfStatus;
  const thumbnail = props.thisBookInfo.imageLinks !== undefined ? props.thisBookInfo.imageLinks.thumbnail : '';
  const authors = props.thisBookInfo.authors !== undefined ? props.thisBookInfo.authors.map( (author, index) => (index === (props.thisBookInfo.authors.length-1)) ? `${author}` : `${author}, ` ) : '' ;

  if (props.bookListInformation !== undefined) {
    const shelfStatusItem = props.bookListInformation.filter(b =>  b.title === props.thisBookInfo.title );
    shelfStatus = shelfStatusItem.length === 0 ? 'none' : shelfStatusItem[0].shelf;
  }
  else {
    shelfStatus = props.thisBookInfo.shelf !== undefined ? props.thisBookInfo.shelf : 'none';
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }} />
          <div className="book-shelf-changer">
            <select defaultValue={shelfStatus} onChange={(e) => props.updateReadingList(props.thisBookInfo, e)}>
              <option value="moveTo" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.thisBookInfo.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
}

export default BookTemplate;
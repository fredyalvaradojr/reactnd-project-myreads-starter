import React from 'react';
import PropsType from 'prop-types';

const BookTemplate = (props) => {
  let shelfStatus = 'none';
  const thumbnail = props.thisBookInfo.imageLinks ? props.thisBookInfo.imageLinks.thumbnail : '';
  const authors = props.thisBookInfo.authors ? props.thisBookInfo.authors.join(', ') : '';

  if (props.bookListInformation) {
    const shelfStatusItem = props.bookListInformation.filter(b =>  b.title === props.thisBookInfo.title );
    shelfStatus = shelfStatusItem.length === 0 ? shelfStatus : shelfStatusItem[0].shelf;
  }
  else {
    shelfStatus = props.thisBookInfo.shelf ? props.thisBookInfo.shelf : shelfStatus;
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

BookTemplate.PropsType = {
  bookListInformation: PropsType.array,
  thisBookInfo: PropsType.array.isRequired,
  updateReadingList: PropsType.func.isRequired
}

export default BookTemplate;
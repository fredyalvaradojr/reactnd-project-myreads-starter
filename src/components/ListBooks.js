import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import ListBookContent from './ListBookContent';
import * as BooksAPI from '../BooksAPI';
import '../App.css';

class ListBook extends Component {

  state = {
    BookList: [],
    loading: true
  }

  componentDidMount() {
    BooksAPI.getAll().then(BookList => {
      this.setState({
        BookList,
        loading: false
      });
    })
  }

  updateBookListState = (bookId, shelfStatus) => {
    return this.state.BookList.filter(b => {
      console.debug(b.id, bookId);
      if(b.id === bookId) {
        b.shelf = shelfStatus;
      }
      return b;
    });
  }

  updateReadingList = (book, e) => {
    const shelfStatus = e.target.value;

    this.setState({
      loading: true
    });

    BooksAPI.update(book, shelfStatus).then(BookList => {
      const updatedBook = BookList[shelfStatus].filter(b => b === book.id);
      this.setState({
        BookList: this.updateBookListState(updatedBook[0], shelfStatus),
        loading: false
      });
    });
  }

  render() {
    console.debug(this.state.BookList);
    const loadingState = this.state.loading ? '' : 'list-books--loading_hide';
    const currentlyReadingList = this.state.BookList.filter(book => book.shelf === 'currentlyReading');
    const wantToReadList = this.state.BookList.filter(book => book.shelf === 'wantToRead');
    const readList = this.state.BookList.filter(book => book.shelf === 'read');
    const noneList = this.state.BookList.filter(book => book.shelf === 'none');
    console.debug(this.state.BookList);
    return (
      <div className="list-books">
        <div className={`list-books--loading ${loadingState}`}>
          <span className="sr-only">loading...</span>
          <div className="list-books--loading_animation" aria-hidden="true" />
        </div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ListBookContent
              title="Currently Reading"
              bookStateList={currentlyReadingList}
              updateReadingList={(book, e) => this.updateReadingList(book, e)}
            />
            <ListBookContent
              title="Want to Read"
              bookStateList={wantToReadList}
              updateReadingList={(book, e) => this.updateReadingList(book, e)}
            />
            <ListBookContent
              title="Read"
              bookStateList={readList}
              updateReadingList={(book, e) => this.updateReadingList(book, e)}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBook;
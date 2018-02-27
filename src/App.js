import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './components/SearchPage';
import ListBooks from './components/ListBooks';

class BooksApp extends Component {

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

  updateBookListState = (bookId, bookList, shelfStatus) => {
    console.debug(shelfStatus);
    return bookList.filter(b => {
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
      let updatedBookList = [...this.state.BookList];
      if(shelfStatus === 'none') {
        updatedBookList = updatedBookList.filter( b => b.id !== book.id );
      } else {
        updatedBookList = this.updateBookListState( BookList[shelfStatus].filter(b => b === book.id)[0], updatedBookList, shelfStatus );
      }

      console.debug(updatedBookList);

      this.setState({
        BookList: updatedBookList,
        loading: false
      });
    });
  }

  render() {
    const loadingState = this.state.loading ? '' : 'list-books--loading_hide';
    const currentlyReadingList = this.state.BookList.filter(book => book.shelf === 'currentlyReading');
    const wantToReadList = this.state.BookList.filter(book => book.shelf === 'wantToRead');
    const readList = this.state.BookList.filter(book => book.shelf === 'read');
    const noneList = this.state.BookList.filter(book => book.shelf === 'none');

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            bookList={this.state.BookList}
            loadingState={loadingState}
            currentlyReadingList={currentlyReadingList}
            wantToReadList={wantToReadList}
            readList={readList}
            updateReadingList={(book, e) => this.updateReadingList(book, e)}
          />
          )}
        />
        <Route path="/search" render={() => (
          <SearchPage
            BookList={this.state.BookList}
            updateReadingList={(book, e) => this.updateReadingList(book, e)}
          />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
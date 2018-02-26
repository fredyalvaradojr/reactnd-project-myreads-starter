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

  updateBookListState = (bookId, shelfStatus) => {
    return this.state.BookList.filter(b => {
      console.debug(b.id, bookId);
      if(b.id === bookId && shelfStatus !== 'none') {
        b.shelf = shelfStatus;
      } else {
        return;
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
      const updatedBook = shelfStatus === 'none' ? book.id : BookList[shelfStatus].filter(b => b === book.id)[0];
      this.setState({
        BookList: this.updateBookListState(updatedBook, shelfStatus),
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
            updateReadingList={(book, e) => this.updateReadingList(book, e)}
          />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
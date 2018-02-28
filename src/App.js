import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './components/SearchPage';
import ListBooks from './components/ListBooks';

class BooksApp extends Component {

  state = {
    BookList: [],
    initLoading: true,
    loading: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(BookList => {
      this.setState({
        BookList,
        initLoading: false
      })
    })
  }

  updateReadingList = (book, e) => {
    let shelfStatus = e.target.value;
    let bookListTemp;

    this.setState({
      loading: true
    })

    if (shelfStatus !== 'none') {
      let idFound = false;

      bookListTemp = this.state.BookList.map( b => {
        if (book.id === b.id) {
          idFound = true;
          b.shelf = shelfStatus;
        }
        return b;
      })

      if(!idFound) {
        book.shelf = shelfStatus;
        bookListTemp.push(book);
      }

    } else {
      bookListTemp = this.state.BookList.filter( b => book.id !== b.id).map( b => b);
    }

    BooksAPI.update(book, shelfStatus).then( results => {
      this.setState({
        BookList: bookListTemp,
        loading: false
      })
    })

  }

  render() {
    const initLoadingState = this.state.initLoading ? (
        <div className='list-books--init-loading'>
          <span className="sr-only">loading...</span>
          <div className="list-books--init-loading_animation" aria-hidden="true" />
        </div>
      ) : '';

    const loadingState = this.state.loading ? (
      <div className='list-books--loading'>
        <span className="sr-only">loading...</span>
        <div className="list-books--loading_animation" aria-hidden="true" />
      </div>
      ) : '';

    return (
      <div className="app">
        {initLoadingState}
        {loadingState}
        <Route exact path="/" render={() => (
          <ListBooks
            bookList={this.state.BookList}
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
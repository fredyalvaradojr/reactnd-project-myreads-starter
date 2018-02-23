import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from './components/SearchPage';
import ListBooks from './components/ListBooks';

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookTemplate from './BookTemplate';

class SearchPage extends Component {

  state = {
    searchResults: [],
    searchQueryValue: ''
  }

  onSearch = (e) => {
    const realQueryValue = e.target.value;

    this.setState({ searchQueryValue: realQueryValue });

    if (realQueryValue !== '') {
      BooksAPI.search(realQueryValue).then( searchContent => {
        this.state.searchQueryValue !== '' ? this.setState({ searchResults: searchContent }) : this.setState({ searchResults: [] });
      });
    }
    else {
      this.setState({ searchResults: [] });
    }
  }

  render() {
    let bookSearchList = '';
    if(this.state.searchResults && this.state.searchResults.length > 0) {
      bookSearchList = this.state.searchResults.map(b => <BookTemplate key={b.id} updateReadingList={(book, e) => this.props.updateReadingList(book, e)} bookListInformation={this.props.BookList} thisBookInfo={b} />);
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.onSearch} value={this.state.searchQueryValue} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookSearchList}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
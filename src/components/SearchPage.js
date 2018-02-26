import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookTemplate from './BookTemplate';

class SearchPage extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    searchResults: []
  }

  onSearch = (e) => {
    const searchQuery = e.target.value;
    BooksAPI.search(searchQuery).then( searchContent => {
      this.setState({ searchResults: searchContent });
    });
  }

  render() {
    console.debug(this.state.searchResults);
    let bookSearchList = '';
    if(this.state.searchResults.length > 0) {
      bookSearchList = this.state.searchResults.map(b => <BookTemplate key={b.id} updateReadingList={(book, e) => this.props.updateReadingList(book, e)} {...b} />);
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
            <input type="text" onChange={this.onSearch} placeholder="Search by title or author"/>
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
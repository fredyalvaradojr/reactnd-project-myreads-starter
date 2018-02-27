import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBookContent from './ListBookContent';
import '../App.css';

class ListBook extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.debug('component mounted');
  }

  componentWillReceiveProps(nextProps) {
    console.debug("nextProps: ", nextProps);
  }

  render() {
    return (
      <div className="list-books">
        <div className={`list-books--loading ${this.props.loadingState}`}>
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
              bookStateList={this.props.currentlyReadingList}
              updateReadingList={(book, e) => this.props.updateReadingList(book, e)}
            />
            <ListBookContent
              title="Want to Read"
              bookStateList={this.props.wantToReadList}
              updateReadingList={(book, e) => this.props.updateReadingList(book, e)}
            />
            <ListBookContent
              title="Read"
              bookStateList={this.props.readList}
              updateReadingList={(book, e) => this.props.updateReadingList(book, e)}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    );
  };
};

export default ListBook;
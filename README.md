# MyReads Project

This is the completed starter project called MyReads. It was developed using the starter template in order to save time in regards to HTML and CSS.

# How to Install
Use the following steps in order to get this projects installed and running in your local browser:

* install all project dependencies with `npm install` or `yarn`
* start the development server with `npm start` or `yarn start`

## File List
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with this app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components # Houses the main components that create the app
    │   ├── BookTemplate.js
    │   ├── ListBookContent.js
    │   ├── ListBooks.js
    │   └── SearchPage.js
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js
```

## Backend Server

A backend server has been provided by Udacity to simplify the development process.
The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that are needed to perform the necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.
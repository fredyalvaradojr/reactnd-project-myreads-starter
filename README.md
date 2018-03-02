# MyReads Book List Manager

This app has been designed to allow a user to create a simple and easy way to keep track of the books they are reading, would like to read and have read.

It was built by using the 'create-react-app' package (https://github.com/facebook/create-react-app) and bootstrapped by Udacity (https://github.com/udacity/reactnd-project-myreads-starter).

The overall development was forked from the Udacity starter repository and then developed the functionality via React and JavaScript.

The base guideline has been completed and checked off via the provided rubric (https://review.udacity.com/#!/rubrics/918/view). In addition to this functionality, I have added a few status animations that give the user feedback that their interaction did register and is in the process of updating.

# Instructions to Get the App Running

Please follow the directions listed below in order to run the application in local environment. Once everything is installed you will be able to visit the following link in your browser:

```bash
http://localhost:3000/
```

```bash
* `npm install` or `yarn` (this will install all dependencies)
* `npm start` or `yarn start` (this will start the development server)
```

# How To Use

After the application loads up you will be able to see three sections of your virtual library. The first section will be "Currently Reading" where the books that you have started are saved. The second section "Want to Read" serves as a bookmark to allow you to remember the list of books that you want to read in the near future. Lastly, you have the "Read" section that can help you remember the books that you have read in the past.
If you wish to move a book to a different section or remove it from your list you can do so by triggering the "arrow" in the book cover and selecting between the different areas.
In addition to the listed functionality, you have the ability to get search for new books by clicking on the "+" icon. Within the search functionality, you will be able to add new books to the different shelves that are available.

## Search Limitation to take notice

Please adhear to the following list of search terms in order to get a postive result:

```bash
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```

## Directory Tree
```bash
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── components # Houses the main components that create the app
    │   ├── BookTemplate.js
    │   ├── ListBookContent.js
    │   ├── ListBooks.js
    │   └── SearchPage.js
    ├── App.css.
    ├── App.js
    ├── BooksAPI.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js
```
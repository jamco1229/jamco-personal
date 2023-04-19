const fetch = await import('node-fetch').then(module => module.default);
const fs = require("fs");

const books = require("./content/_data/books.json");

const API_KEY = "AIzaSyDOPExy5-nJnsl5sxHGBhTOI7sDeOA2j_A";

async function fetchBookCover(isbn) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}`;
  const response = await fetch(url);
  const json = await response.json();

  if (json.items && json.items.length > 0) {
    return json.items[0].volumeInfo.imageLinks.thumbnail;
  } else {
    return "";
  }
}

async function fetchAllBookCovers() {
  for (let book of books) {
    const isbn = book.isbn13;
    const coverUrl = await fetchBookCover(isbn);
    book.image = coverUrl;
  }

  fs.writeFileSync("./_data/books.json", JSON.stringify(books, null, 2));
}

fetchAllBookCovers();

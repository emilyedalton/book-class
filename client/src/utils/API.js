import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=philosophy+inpublisher:Northwestern&orderBy=newest"


export default {
  //perform search
  search: function(query) {
    // const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${query}+inpublisher:Northwestern&orderBy=newest`

    return axios.get("https://www.googleapis.com/books/v1/volumes?",{ params: { q: query } },"inpublisher:Northwestern&orderBy=newest");
  },
  // Gets all books
  getBooks: function() {
    return axios.get(URL);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col} from "../components/Grid";
import Saved from "../components/Saved";


class SavedTitle extends Component {
  state={
      books: []
  };


 componentDidMount() {
    this.loadBooks();
  }

//   res.data.items was the magic thing to get the default term to work
  loadBooks = () => {
    API.getAPIBooks()
      .then(res =>
        this.setState({ books: res.data},
          console.log("I am logging " + res.data)
        ))
      .catch(err => console.log(err));
      }
      deleteBook = event => {
       const bookid= event.target.attributes.getNamedItem("booknum").value;
        API.deleteBook(bookid)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
      
  render() {
    return (
      <div className="container">

        <Jumbotron>
        </Jumbotron>

        <Col size="md-12" />
     
      <Col size="md-12" />
     
        {this.state.books.length ? (
          <div>
            {this.state.books.map(book => (

              <Saved
              booknum={book._id}
              title={book.title}
              subtitle={book.subtitle}
              link={book.link}
              authors={book.authors}
              description={book.description}
              image={book.image}
              clickHandler={this.deleteBook}
          
              />

            ))}
          </div>

        )

          : (
            <h3>No Results to Display</h3>
          )}




      </div>

    )
  }}

export default SavedTitle;
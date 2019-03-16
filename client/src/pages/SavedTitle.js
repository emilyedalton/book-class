import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Form from '../components/Form'
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
              key={book._id}
              title={book.title}
              subtitle={book.subtitle}
              link={book.link}
              authors={book.authors}
              // authors={book.authors.join(", ")}

              description={book.description}
              image={book.image}
          
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
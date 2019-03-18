import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Form from '../components/Form'
import BookPage from "../components/BookPage";
import {Col} from "../components/Grid";

//shoudl be the collection fieldnames, so when you call the model it will update the
class Books extends Component {
  state = {
    books: [],
    searchTerm: ""
  };

 
  search = query => {
  


  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;    
    const name = event.target.name;
      this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.searchTerm)
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
    console.log(this.state.searchTerm)
    
      ;
  }
  
 


  handleFormSave = bookData => {
    console.log(bookData, "i am book data")
    API.saveBook(bookData) ;
  }




  render() {
    return (
      <div className="container">

        <Jumbotron>
        </Jumbotron>



        <Form
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          submit={this.handleFormSubmit}

        />


  
        {this.state.books.length ? (
          <div>
            {this.state.books.map(book => (

              <BookPage
              key={book.id}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              link={book.volumeInfo.infoLink}
              authors={book.volumeInfo.authors?book.volumeInfo.authors.join(", "):""}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"}
                clickHandler={() => {
                  this.handleFormSave(
                    {
                      title: book.volumeInfo.title,
                      author: book.volumeInfo.authors,
                      description: book.volumeInfo.description,
                      image: book.volumeInfo.imageLinks.thumbnail ,
                      link: book.volumeInfo.canonicalVolumeLink,
                      savedBooks: "true"
                    })
                }}
              />

            ))}
                    <Col size="md-12" />

          </div>

        )

          : (
            <h3>No Results to Display</h3>
          )}




      </div>

    )
  }
}
export default Books;

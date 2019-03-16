import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Form from '../components/Form'
import BookPage from "../components/BookPage";
//shoudl be the collection fieldnames, so when you call the model it will update the
class Books extends Component {
  state = {
    books: [],
    searchTerm: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }
  //res.data.items was the magic thing to get the default term to work
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data.items})
  //     )
  //     .catch(err => console.log(err));

  // };
  search = query => {
  


  };
  // if(!resp.ok){
  //   if(resp.status >=400 && resp.status < 500){
  //     return resp.json().then(data =>{
  //       let err ={errorMessage:data.message};
  //       throw err; 
  //     })
  //   }


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
      // .then(res =>
      //   this.setState({ books: res.data.items})
      // )
      // if (this.state.title) {
      // console.log(this.state.title)// this.search(this.setState.title)        
      // .then(res.data => this.loadBooks())
      ;
  }
  // bookSelectedHandler = (id) => {
  //   this.setState({ selectedBookid: id })
  //   alert("I'm SAVED" + id)

  // }

  //   postDataHandler = (event) =>{
  //     this.setState({selectedBookid:true})

  //     const bookData ={
  //       // books: this.setState.books
  //  title: books.volumeInfo.title,
  //  author: book.volumeInfo.authors,
  //  description: book.volumeInfo.description,
  //  image: book.volumeInfo.imageLinks.thumbnail,
  //  link: book.volumeInfo.canonicalVolumeLink
  //     }
  //     event.preventDefault();
  // API.saveBook(bookData)
  // .then(response => {console.log(response);
  // })
  //   }


  handleFormSave = bookData => {
    console.log(bookData, "i am book data")
    API.saveBook(bookData)


      // .then(alert("SAVED") )
      // .catch(err => console.log(err)) ;


      // if (this.state.title) {
      // console.log(this.state.title)// this.search(this.setState.title)        
      // .then(res.data => this.loadBooks())
      ;
  }




  render() {
    return (
      <div className="container">

        <Jumbotron>
          {/* <h1>What Books Should I Read?</h1> */}
        </Jumbotron>

{/* Emily, remember the attributes are the ones that you are calling using the dot props
, you didn't have the right name for the attribute name and value. Also name and value
are referencing in the inputOnchange event. You need to have the attribute name as "name" and
and value as "value" otherwise it will break */}

        <Form
            name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          submit={this.handleFormSubmit}

        />


        {/* <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn> */}



        <Col size="md-12" />
        {/* <Jumbotron>
              <h1>Recent Publications in Philosophy</h1>
            </Jumbotron> */}
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

import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import BookPage from "../components/BookPage";

class Books extends Component {
  state = {
    books: [],
    title: "",
    
    // search: ""
  };

  componentDidMount() {
    this.loadBooks();
  }
//res.data.items was the magic thing to get the default term to work
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data.items, title: "", author: "", synopsis: ""})
      )
      .catch(err => console.log(err));

  };
  search = query =>{
  API.search(query).then(resp => this.setState( 
    {books: resp.data.items,
     title: "",
    },
    
  ))};
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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title) {
      this.search(this.setState.title)        
      .then(res => this.loadBooks())
      ;
  }

        // title: this.state.title,
        // author: this.state.author,
        // synopsis: this.state.synopsis
  //     })
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div className = "container">
      {/* <Container fluid> */}
      {/* <div className ="row"> */}
        {/* <Row> */}
          {/* <Col size="col-sm-6 col-sm-offset-3"> */}
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <div className ="row">
            
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
              
            </form>
            </div>
            {/* </div> */}
          {/* </Col> */}
          
          <Col size="md-12"/>
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <div>
              {this.state.books.map(book =>(
                <BookPage key={book._id}
                title={book.volumeInfo.title}
                author ={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.thumbnail}
                description={book.volumeInfo.description}
                />

              ))}
</div>
               /* <List>
               {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                      {book.volumeInfo.image}  {book.volumeInfo.title} by {book.volumeInfo.authors}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List> */
            ) 
            
            :(
              <h3>No Results to Display</h3>
            )}
            
      
            

{/* </Row> */}

{/* </Container> */}
</div>

          )
        }} 
export default Books;
        
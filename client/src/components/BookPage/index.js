import React, { Component } from 'react'; 
// import TodoList from './components/TodoList';
// import './App.css';

class BookPage extends Component {
  render(props) {
    return (
      <div >

{/* <li>{props.title}</li> */}
 <h1>{this.props.title}</h1>
 <h2>{this.props.author}</h2>
 
 <div id = "description"><img src ={this.props.image} alt="book_image"/><p>{this.props.description}</p></div>

      </div>
    );
  }
}

export default BookPage;
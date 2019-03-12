import React, { Component } from 'react'; 
// import TodoList from './components/TodoList';
// import './App.css';

class BookPage extends Component {
  render(props) {
    return (
      <div >
{/* <li>{props.title}</li> */}
 <h1>{this.props.title}</h1>
 by <h2>{this.props.author}</h2>
 <img src ={this.props.image} alt="book_image"/>
 <div id = "description"><p>{this.props.description}</p></div>

      </div>
    );
  }
}

export default BookPage;
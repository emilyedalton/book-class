import React, { Component } from 'react'; 
// import TodoList from './components/TodoList';
// import './App.css';

class BookPage extends Component {
  render(props) {
    return (
      <div >

{/* <li>{props.title}</li> */}
 <h1><a href={this.props.link}>{this.props.title}</a></h1>
 <h2>{this.props.author}</h2>
 
 <div id = "description"><img src ={this.props.image} alt="book_image"/><p>{this.props.description}</p></div>

 <button onClick={this.props.onClick} type="button"class="btn btn-dark">Add to My Course Adoptions</button>

      </div>
    );
  }
}

export default BookPage;
import React, { Component } from 'react'; 
import "../BookPage/style.css"

class BookPage extends Component {
  render(props) {
    return (
      <div className = "container">
      <div className ="card" >

 
 <h1><a href={this.props.link}>{this.props.title}</a></h1>
 <h2>{this.props.author}</h2>
 <div id = "description">
 
 <img src ={this.props.image} alt="book_image"/><p>{this.props.description}</p>
 <button onClick ={this.props.clickHandler} type="button"className="btn btn-dark">Add to My Course Adoptions</button>

 </div>

      </div>
      </div>
    );
  }
}

export default BookPage;
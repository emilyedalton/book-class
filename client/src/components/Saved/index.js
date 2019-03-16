import React, { Component } from 'react'; 

class Saved extends Component {
  render(props) {
    return (
      <div >

 
 <h1><a href={this.props.link}>{this.props.title}</a></h1>
 <h2>{this.props.author}</h2>
 <div id = "description">
 
 <img src ={this.props.image} alt="book_image"/><p>{this.props.description}</p>
 <button onClick ={this.props.clickHandler} type="button"class="btn btn-dark">Add to My Course Adoptions</button>

 </div>
<div>
 </div>
      </div>
    );
  }
}

export default Saved;
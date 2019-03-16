import React from "react";

// This file exports the Input, TextArea, and FormBtn components
const Form = props => {

  return (
<form>
  <div className="form-group">
    <input type="text"
    name={props.name}
     value ={props.value}
     className="form-control" 
     onChange={props.onChange}
    //  id ="search"
     placeholder="Search the Northwestern University Press Catalog">
    </input>
    <button type="submit" onClick={props.submit} className="btn btn-danger">Submit</button>
    </div>
</form>





  );




}
export default Form;


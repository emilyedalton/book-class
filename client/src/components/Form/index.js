import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" name ={props.searchtitle} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button onClick={props.onClick} name ={props.searchtitle} style={{ float: "right", marginBottom: 10 }} className="btn btn-dark">
      {props.children}
    </button>
  );
}

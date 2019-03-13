import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ color: "white",height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: "url(" + "http://nupress.northwestern.edu/sites/default/files/styles/header_image/public/01_image_0.jpg?itok=69lz_Ur2" + ")"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;

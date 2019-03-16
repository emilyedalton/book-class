const axios = require("axios");
module.exports = {

  // Emily, this controller calls the external api which has no tie to the DB
  //then it returns the value of google results back to the click during the submit onclick event
  
googleFindAll: function(req, res) {

    axios
    .get("https://www.googleapis.com/books/v1/volumes/",{ params: req.query },"inpublisher:Northwestern")
    .then(results=>results.data.items)
    .then(results=>res.json(results))
    .catch(err => res.status(422).json(err));
  } 
}
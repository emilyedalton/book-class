const axios = require("axios");
module.exports = {

  
googleFindAll: function(req, res) {

    axios
    .get("https://www.googleapis.com/books/v1/volumes/",{ params: req.query },"+inpublisher:Northwestern")
    .then(results=>results.data.items)
    .then(results=>res.json(results))
    .catch(err => res.status(422).json(err));
  } 
}
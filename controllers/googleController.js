const axios = require("axios");
module.exports = {

  
googleFindAll: function(req, res) {
req.query.q=req.query.q+"+inpublisher:Northwestern"
    axios
    .get("https://www.googleapis.com/books/v1/volumes/",{ params: req.query })
    .then(results=>results.data.items)
    .then(results=>res.json(results))
    .catch(err => res.status(422).json(err));
  } 
}
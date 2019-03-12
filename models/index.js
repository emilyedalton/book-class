var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/googlebooks');

mongoose.Promise = Promise;


module.exports = {
  Book: require("./book")
};

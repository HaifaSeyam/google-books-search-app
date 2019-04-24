const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  //Model structure
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

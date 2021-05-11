const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: true,
  },
  casts: {
    type: String,
    required: true,
  },
  raiting: {
    type: Number,
    required: true,
  },
  airdate: {
    type: Date,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

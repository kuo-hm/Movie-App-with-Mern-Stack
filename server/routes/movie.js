const router = require("express").Router();
const Movie = require("../models/movie");

router.get("/movies", (req, res) => {
  Movie.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/movies", (req, res) => {
  const movie = new Movie(req.body);
  movie
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

import {
  Box,
  GridItem,
  Heading,
  Image,
  Text,
  Button,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllGenres } from "../../features/movie/genreSlice";

import { fetchRated, selectAllRated } from "../../features/movie/ratedSlice";
import DIsplayData from "./subComponent/DIsplayData";

import PopularOverlay from "./subComponent/PopularOverlay";
const Rated = () => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [displayShow, setDisplayShow] = useState(false);

  const rated = useSelector(selectAllRated);
  const genres = useSelector(selectAllGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRated(localStorage.getItem("rated")));
  }, [dispatch]);
  const type =
    localStorage.getItem("rated").charAt(0).toUpperCase() +
    localStorage.getItem("rated").slice(1) +
    "s";
  const [ypath, setypath] = useState({
    backdrop_path: "",
    id: "",
    original_title: "",
    overviews: "",
    overview: "",
    poster_path: "",
    vote_average: "",
    youtubePath: "",
    filled: false,
  });
  const [showTrailer, setShowTrailer] = useState(true);
  const changePosition = () => {
    if (window.scrollY >= "147" && ypath.filled) {
      setScroll(true);
      return;
    } else setScroll(false);
  };
  window.addEventListener("scroll", changePosition);
  const [scroll, setScroll] = useState(false);

  return (
    <Box>
      <Heading mb="2">Rated {type}</Heading>
      <DIsplayData
        ypath={ypath}
        setypath={setypath}
        showTrailer={showTrailer}
        setShowTrailer={setShowTrailer}
        scroll={scroll}
      />
      <Box mt={scroll ? "50vh" : "0"}>
        <SimpleGrid h="200px" minChildWidth="200px" spacing="10px">
          {rated.map((data) => (
            <Box key={data.id} colSpan={1}>
              <PopularOverlay
                data={data}
                genres={genres}
                imagePath={imagePath}
                setDisplayShow={setDisplayShow}
                setypath={setypath}
                setShowTrailer={setShowTrailer}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Rated;

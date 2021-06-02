import {
  Box,
  GridItem,
  Heading,
  Image,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllGenres } from "../../features/movie/genreSlice";

import {
  fetchPopular,
  selectAllPopular,
} from "../../features/movie/popularSlice";
import DIsplayData from "./subComponent/DIsplayData";
import PopularOverlay from "./subComponent/PopularOverlay";
const Popular = () => {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const popular = useSelector(selectAllPopular);
  const genres = useSelector(selectAllGenres);
  const dispatch = useDispatch();
  const [showTrailer, setShowTrailer] = useState(true);
  const [displayShow, setDisplayShow] = useState(false);
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

  useEffect(() => {
    dispatch(fetchPopular(localStorage.getItem("popular")));
  }, [dispatch]);
  const type =
    localStorage.getItem("popular").charAt(0).toUpperCase() +
    localStorage.getItem("popular").slice(1) +
    "s";
  const changePosition = () => {
    if (window.scrollY >= "147" && ypath.filled) setScroll(true);
    else setScroll(false);
  };
  window.addEventListener("scroll", changePosition);
  const [scroll, setScroll] = useState(false);

  return (
    <Box>
      <Heading mb="2">Popular {type}</Heading>
      <DIsplayData
        ypath={ypath}
        setypath={setypath}
        showTrailer={showTrailer}
        setShowTrailer={setShowTrailer}
        scroll={scroll}
      />
      <Box mt={scroll ? "50vh" : "0"}>
        <SimpleGrid h="200px" minChildWidth="200px" spacing="10px">
          {popular.map((data) => (
            <GridItem key={data.id} colSpan={1}>
              <PopularOverlay
                data={data}
                genres={genres}
                imagePath={imagePath}
                setypath={setypath}
                setDisplayShow={setDisplayShow}
                setShowTrailer={setShowTrailer}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Popular;

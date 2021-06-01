import {
  Box,
  GridItem,
  Heading,
  Image,
  Text,
  IconButton,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllGenres } from "../../features/movie/genreSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  fetchPopular,
  selectAllPopular,
} from "../../features/movie/popularSlice";
import PopularOverlay from "./subComponent/PopularOverlay";
const Popular = () => {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const popular = useSelector(selectAllPopular);
  const genres = useSelector(selectAllGenres);
  const dispatch = useDispatch();
  const [showTrailer, setShowTrailer] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [ypath, setypath] = useState({
    backdrop_path: "",
    id: "",
    original_title: "",
    overviews: "",
    overview: "",
    poster_path: "",
    vote_average: "",
    youtubePath: "",
  });

  useEffect(() => {
    dispatch(fetchPopular(localStorage.getItem("popular")));
  }, [dispatch]);
  const type =
    localStorage.getItem("popular").charAt(0).toUpperCase() +
    localStorage.getItem("popular").slice(1) +
    "s";
  const changePosition = () => {
    if (window.scrollY >= "147") setScroll(true);
    else setScroll(false);
  };
  window.addEventListener("scroll", changePosition);
  return (
    <Box>
      <Heading mb="2">Popular {type}</Heading>
      <Box
        position={scroll ? "fixed" : "sticky"}
        top="0"
        w="100%"
        zIndex="100"
        overflow="hidden"
      >
        {ypath.filled && (
          <Box position="relative">
            <Image
              w="100%"
              h="50vh"
              src={imagePath + ypath.backdrop_path}
              alt=""
            />
            <Box>
              <Text
                position="absolute"
                top="8px"
                left="16px"
                fontSize="4xl"
                fontWeight="extrabold"
                textShadow="1px 1px #4a4848"
              >
                {ypath.original_title}{" "}
              </Text>
              <Text
                position="absolute"
                top="80px"
                left="16px"
                fontSize="3xl"
                textShadow="1px 1px #4a4848"
                fontWeight="bold"
              >
                {ypath.overviews}
              </Text>
              <Text
                position="absolute"
                color="#FFFFFF"
                top="130px"
                left="16px"
                textShadow="1px 1px #000000"
                fontSize="20"
              >
                {ypath.overview}
              </Text>

              <Button
                position="absolute"
                top="8px"
                right="16px"
                aria-label="Search database"
                onClick={() => setypath({ youtubePath: "" })}
              >
                X
              </Button>
              <Button
                position="absolute"
                bottom="50"
                right="50%"
                colorScheme="gray"
                variant="solid"
                onClick={() => setShowTrailer(true)}
              >
                Watch the Trailer
              </Button>
              {showTrailer && (
                <Box>
                  <Button
                    position="absolute"
                    zIndex="200"
                    top="80px"
                    right="50%"
                    borderRadius="50%"
                    textShadow="1px 1px #000000"
                    onClick={() => setShowTrailer(false)}
                  >
                    X
                  </Button>
                  <iframe
                    title={ypath.original_title}
                    style={{
                      position: "absolute",
                      top: "60px",
                      left: 0,
                      width: "100%",
                      height: "43.6vh",
                    }}
                    src={`https://www.youtube.com/embed/${ypath.youtubePath}`}
                    frameBorder="0"
                  />
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
      <SimpleGrid h="200px" minChildWidth="200px" spacing="10px">
        {popular.map((data) => (
          <GridItem key={data.id} colSpan={1}>
            <PopularOverlay
              data={data}
              genres={genres}
              imagePath={imagePath}
              setypath={setypath}
              setShowTrailer={setShowTrailer}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Popular;

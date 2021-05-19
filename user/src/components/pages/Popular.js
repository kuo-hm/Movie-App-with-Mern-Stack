import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllGenres } from "../../features/movie/genreSlice";
import { selectAllPopular } from "../../features/movie/popularSlice";
import Poster from "./subComponent/Posters";
const Popular = () => {
  const popular = useSelector(selectAllPopular);
  const genres = useSelector(selectAllGenres);

  const type =
    localStorage.getItem("popular").charAt(0).toUpperCase() +
    localStorage.getItem("popular").slice(1) +
    "s";

  return (
    <Box>
      <Heading>Popular {type}</Heading>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        {popular.map((data) => (
          <GridItem colSpan={1}>
            <Poster data={data} genres={genres} />
          </GridItem>
        ))}
      </Grid>

      {/* <Carousel
        plugins={[
          "infinite",

          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
        }}
        animationSpeed={10}
      >
        {popular.map((data) => (
          <div>
            <PosterFeat data={data} />
          </div>
        ))}
      </Carousel> */}
    </Box>
  );
};

export default Popular;

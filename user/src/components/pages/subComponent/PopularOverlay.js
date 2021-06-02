import { Image, Box, Badge } from "@chakra-ui/react";
import "./Poster.css";
import axios from "axios";
// import YouTube from "react-youtube";

const PopularOverlay = ({ data, setypath, imagePath, setShowTrailer }) => {
  const trailerFetch = async (id) => {
    setypath({
      backdrop_path: data.backdrop_path,
      id: data.id,
      original_title: data.original_title,
      overview: data.overview,
      overviews: "Overview:",
      poster_path: data.poster_path,
      vote_average: data.vote_average,
      filled: true,
    });
    setShowTrailer(false);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=87871b6d81576f815efd80c7af097c08&language=en-US`
      )
      .then((res) => {
        const persons = res.data.results;
        persons.forEach((element) => {
          if (element.site === "YouTube") {
            setypath({
              backdrop_path: data.backdrop_path,
              id: data.id,
              original_title: data.original_title,
              overview: data.overview,
              overviews: "Overview:",
              poster_path: data.poster_path,
              vote_average: data.vote_average,
              filled: true,
              youtubePath: element.key,
            });
          }
        });
      });
  };

  return (
    <Box
      className="image"
      cursor="pointer"
      onClick={() => trailerFetch(data.id)}
    >
      <Image
        boxSize="300px"
        className="image__img"
        src={imagePath + data.poster_path}
        alt={data.original_title}
      />
      <Box className="image__overlay ">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {data.original_title}
        </Box>
        <Box flexDirection="row" mb="2"></Box>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          Raiting {data.vote_average}
        </Badge>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" fontSize="sm">
            {data.vote_count} votes
          </Box>
        </Box>
      </Box>
      {/* <YouTube videoId={ypath} opts={opts} onReady={onReady} /> */}
    </Box>
  );
};

export default PopularOverlay;

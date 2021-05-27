import { Image, Box, Badge } from "@chakra-ui/react";
import "./Poster.css";
const MoviePoster = ({ data, genres }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <Box className="image">
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
        <Box flexDirection="row" mb="2">
          Genres:
          {data.genre_ids.map((genreId) =>
            genres
              .filter((genre) => genre.id === genreId)
              .map((filteredGenre) => (
                <Box key={genreId.id}>
                  <Badge>{filteredGenre.name}</Badge>
                </Box>
              ))
          )}
        </Box>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          Raiting {data.vote_average}
        </Badge>
        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" fontSize="sm">
            {data.vote_count} votes
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MoviePoster;

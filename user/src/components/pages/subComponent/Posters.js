import { Spinner, Image, Box, Badge } from "@chakra-ui/react";
import "./Poster.css";
const MoviePoster = ({ data, genres }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  if (!data.production_countries) {
    return (
      <Box className="image">
        <Image
          boxSize="300px"
          className="image__img"
          src={imagePath + data.poster_path}
          alt="Bricks"
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
            {data.genre_ids.map((item) =>
              genres
                .filter((genre) => genre.age === item)
                .map((filteredGenre) => (
                  <Box>
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
      //   <Box
      //     maxW="sm"
      //     borderWidth="1px"
      //     borderRadius="lg"
      //     overflow="hidden"
      //     size="200px"
      //   >
      //     <Image boxSize="200px" src={imagePath + data.poster_path} />

      //     <Box p="6" position="relative">
      //       <Box d="flex" alignItems="baseline">
      //         <Badge borderRadius="full" px="2" colorScheme="teal">
      //           Raiting
      //         </Badge>
      //         <Box
      //           color="gray.500"
      //           fontWeight="semibold"
      //           letterSpacing="wide"
      //           fontSize="xs"
      //           textTransform="uppercase"
      //           ml="2"
      //         >
      //           {data.vote_average}
      //         </Box>
      //       </Box>

      //       <Box
      //         mt="1"
      //         fontWeight="semibold"
      //         as="h4"
      //         lineHeight="tight"
      //         isTruncated
      //       >
      //         {data.original_title}
      //       </Box>

      //       <Box>{data.overview}</Box>

      //       <Box d="flex" mt="2" alignItems="center">
      //         <Box as="span" ml="2" color="gray.600" fontSize="sm">
      //           {data.vote_count} votes
      //         </Box>
      //       </Box>
      //     </Box>
      //   </Box>
    );
  }
  return (
    <Spinner
      mt="20%"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

export default MoviePoster;

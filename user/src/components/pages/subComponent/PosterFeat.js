import { Image, Box, Badge } from "@chakra-ui/react";
import "./Poster.css";
const PosterFeat = ({ data }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <Box className="image" cursor="pointer">
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

        <Badge borderRadius="full" px="2" colorScheme="teal">
          Raiting {data.vote_average}
        </Badge>
      </Box>
    </Box>
  );
};

export default PosterFeat;

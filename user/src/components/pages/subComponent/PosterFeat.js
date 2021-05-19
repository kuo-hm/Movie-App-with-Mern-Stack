import { Image, Box, Badge } from "@chakra-ui/react";
import "./Poster.css";
const PosterFeat = ({ data, genres }) => {
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
      </Box>
    </Box>
  );
};

export default PosterFeat;

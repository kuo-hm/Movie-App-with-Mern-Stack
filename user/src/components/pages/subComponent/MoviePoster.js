import {
  Text,
  Popover,
  Spinner,
  Box,
  Image,
  Badge,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const MoviePoster = ({ data }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  if (data.production_countries) {
    return (
      <Popover trigger="hover" boundary="scrollParent">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <PopoverTrigger>
            <Image boxSize="200px" src={imagePath + data.poster_path} />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    Raiting
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {data.vote_average}
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {data.original_title}
                </Box>

                <Box>{data.overview}</Box>

                <Box d="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {data.vote_count} votes
                  </Box>
                </Box>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Box>
      </Popover>
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

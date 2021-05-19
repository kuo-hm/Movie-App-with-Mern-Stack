import {
  Box,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FcNext } from "react-icons/fc";
import PosterFeat from "./PosterFeat";

const Content = ({ latest, popular, genres }) => {
  const bg = useColorModeValue("black", "gray.200");

  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <Stack>
      <Text>
        <Link
          _hover={{
            color: bg,
          }}
          fontSize="2xl"
          color="teal.500"
          href="#"
        >
          Popular <Icon as={FcNext} />
        </Link>
      </Text>
      <Box maxW="99%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <HStack>
          {popular.map((pop) => (
            <>
              <Image
                cursor="pointer"
                boxSize="300px"
                className="image__img"
                src={imagePath + pop.poster_path}
              />
            </>
          ))}
        </HStack>
      </Box>
      <Text>
        <Link
          _hover={{
            color: bg,
          }}
          fontSize="2xl"
          color="teal.500"
          href="#"
        >
          Top Rated <Icon as={FcNext} />
        </Link>
      </Text>

      <Box maxW="99%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <HStack>
          {latest.map((lat) => (
            <Image
              cursor="pointer"
              boxSize="300px"
              className="image__img"
              src={imagePath + lat.poster_path}
            />
          ))}
        </HStack>
      </Box>
    </Stack>
  );
};

export default Content;

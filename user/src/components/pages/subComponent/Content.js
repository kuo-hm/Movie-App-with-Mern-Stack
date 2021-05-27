import {
  Box,
  Stack,
  Text,
  Icon,
  useColorModeValue,
  Link as Lk,
} from "@chakra-ui/react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FcNext } from "react-icons/fc";
import PosterFeat from "./PosterFeat";
import { Link } from "react-router-dom";
const Content = ({ latest, popular, type }) => {
  const bg = useColorModeValue("black", "gray.200");
  return (
    <Stack>
      <Text>
        <Lk
          _hover={{
            color: bg,
          }}
          fontSize="2xl"
          color="teal.500"
        >
          <Link to="popular">
            Popular {localStorage.getItem("popular")} <Icon as={FcNext} />
          </Link>
        </Lk>
      </Text>
      <Box maxW="99%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Carousel
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
            <div key={data.id}>
              <PosterFeat data={data} />
            </div>
          ))}
        </Carousel>
      </Box>
      <Text>
        <Lk
          _hover={{
            color: bg,
          }}
          fontSize="2xl"
          color="teal.500"
        >
          <Link to="rated">
            Top Rated {localStorage.getItem("rated")}
            <Icon as={FcNext} />
          </Link>
        </Lk>
      </Text>

      <Box maxW="99%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Carousel
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
          {latest.map((data) => (
            <div key={data.id}>
              <PosterFeat data={data} />
            </div>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Content;

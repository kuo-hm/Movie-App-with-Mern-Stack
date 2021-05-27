import Posters from "./Posters";
import { Stack, Spinner } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Slider = ({ genres, datas }) => {
  return (
    <Stack>
      {datas.length > 0 ? (
        <Carousel
          plugins={[
            "infinite",
            "clickToChange",
            "centered",
            "arrows",

            {
              resolve: autoplayPlugin,

              options: {
                interval: 2000,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
          animationSpeed={10}
        >
          {datas.map((data) => (
            <div key={data.id}>
              <Posters data={data} genres={genres} />
            </div>
          ))}
        </Carousel>
      ) : (
        <Spinner
          alignSelf="center"
          mt="20%"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </Stack>
  );
};

export default Slider;

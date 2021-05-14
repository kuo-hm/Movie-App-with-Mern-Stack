import MoviePoster from "./subComponent/MoviePoster";
import axios from "axios";
import { useEffect, useState } from "react";
import { HStack, Stack } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const api =
    "https://api.themoviedb.org/3/movie/55?api_key=87871b6d81576f815efd80c7af097c08";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(api).then((res) => {
      const persons = res.data;
      setData(persons);
    });
  }, []);

  // const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <Stack>
      {/* <Carousel
        autoPlay="true"
        infiniteLoop="true"
        emulateTouch="true"
        dynamicHeight="true"
        centerMode="true"
      >
        <div>
          <Image src={imagePath + data.poster_path} h="500" />
        </div>
        <div>
          <Image src={imagePath + data.backdrop_path} h="500" />
        </div>
        <div>
          <Image src={imagePath + data.poster_path} h="500" />
        </div>
        <div>
          <Image src={imagePath + data.backdrop_path} h="500" />
        </div>
        <div>
          <Image src={imagePath + data.poster_path} h="500" />
        </div>
        <div>
          <Image src={imagePath + data.backdrop_path} h="500" />
        </div>
        <div>
          <Image src={imagePath + data.poster_path} h="500" />
        </div>
      </Carousel> */}
      <HStack>
        <MoviePoster data={data} />
        <MoviePoster data={data} />
        <MoviePoster data={data} />
        <MoviePoster data={data} />
        <MoviePoster data={data} />
      </HStack>
    </Stack>
  );
};

export default Home;

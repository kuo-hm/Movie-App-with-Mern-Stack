import Posters from "./subComponent/Posters";
import axios from "axios";
import { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const Trendingapi =
    " https://api.themoviedb.org/3/trending/movie/week?api_key=87871b6d81576f815efd80c7af097c08";

  const genresApi =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=87871b6d81576f815efd80c7af097c08&language=en-US";

  const [datas, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios.get(Trendingapi).then((res) => {
      const persons = res.data;
      setData(persons);
    });
    axios.get(genresApi).then((res) => {
      const persons = res.data;
      setGenres(persons);
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
      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        emulateTouch="true"
        centerMode="true"
        centerSlidePercentage="50"
        dynamicHeight="true"
      >
        {datas.results &&
          datas.results.map((data) => (
            <div>
              <Posters data={data} genres={genres} />
            </div>
          ))}
      </Carousel>
    </Stack>
  );
};

export default Home;

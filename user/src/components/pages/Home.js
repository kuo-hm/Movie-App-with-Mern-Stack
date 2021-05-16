import Posters from "./subComponent/Posters";
import { useEffect } from "react";
import { Stack, Spinner } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrending,
  selectAllTrendingVideos,
} from "../../features/movie/trendingSlice";
import { fetchGenres, selectAllGenres } from "../../features/movie/genreSlice";
const Home = () => {
  const dispatch = useDispatch();
  const datas = useSelector(selectAllTrendingVideos);
  const genres = useSelector(selectAllGenres);

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <Stack>
      {datas ? (
        <Carousel
          autoPlay="true"
          infiniteLoop="true"
          emulateTouch="true"
          centerMode="true"
          centerSlidePercentage="25"
          dynamicHeight="true"
        >
          {datas.map((data) => (
            <div>
              <Posters data={data} genres={genres} />
            </div>
          ))}
        </Carousel>
      ) : (
        <Spinner
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

export default Home;

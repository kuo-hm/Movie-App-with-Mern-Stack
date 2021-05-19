import { useEffect, useState } from "react";
// Components--------
import Slider from "./subComponent/Slider";
import Content from "./subComponent/Content";

// Redux----------
import { useSelector, useDispatch } from "react-redux";
// Trending Redux---------
import {
  fetchTrending,
  selectAllTrendingVideos,
} from "../../features/movie/trendingSlice";
// Genres Redux--------
import { fetchGenres, selectAllGenres } from "../../features/movie/genreSlice";
// Popular Redux--------
import {
  selectAllPopular,
  fetchPopular,
} from "../../features/movie/popularSlice";
// Latest Redux--------
import { fetchRated, selectAllRated } from "../../features/movie/ratedSlice";

// UI---------------
import { HStack, Stack, VStack, Button, ButtonGroup } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();
  const trending = useSelector(selectAllTrendingVideos);
  const genres = useSelector(selectAllGenres);
  const latest = useSelector(selectAllRated);
  const popular = useSelector(selectAllPopular);
  const [type, setType] = useState("all");
  useEffect(() => {
    //Fetch trending
    dispatch(fetchTrending(type));
    //Fetch Top Rated
    if (type === "all") dispatch(fetchRated("tv"));
    else dispatch(fetchRated(type));
    //Fetch Popular
    if (type === "all") dispatch(fetchPopular("movie"));
    else dispatch(fetchPopular(type));
    //Fetch Genre
    dispatch(fetchGenres());
  }, [dispatch, type]);
  const [btnM, setbtnM] = useState(false);
  const [btnA, setbtnA] = useState(false);
  const [btnT, setbtnT] = useState(false);
  const movies = () => {
    setType("movie");
    setbtnM(true);
    setbtnA(false);
    setbtnT(false);
  };
  const all = () => {
    setType("all");
    setbtnM(false);
    setbtnT(false);
    setbtnA(true);
  };
  const tv = () => {
    setType("tv");
    setbtnM(false);
    setbtnT(true);
    setbtnA(false);
  };

  return (
    <Stack>
      <VStack>
        <HStack spacing="24px">
          <ButtonGroup>
            <Button
              w="100px"
              onClick={movies}
              isActive={btnM}
              _active={{
                bg: "green.200",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Movie
            </Button>
            <Button
              w="100px"
              isActive={btnA}
              onClick={all}
              _active={{
                bg: "green.200",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              All
            </Button>
            <Button
              w="100px"
              isActive={btnT}
              onClick={tv}
              _active={{
                bg: "green.200",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Tv
            </Button>
          </ButtonGroup>
        </HStack>
      </VStack>
      <Slider datas={trending} genres={genres} />
      <Content type={type} latest={latest} popular={popular} />
    </Stack>
  );
};

export default Home;

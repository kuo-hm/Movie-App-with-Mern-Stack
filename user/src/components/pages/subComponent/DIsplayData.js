import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const DIsplayData = ({
  ypath,
  setypath,
  setShowTrailer,
  showTrailer,
  scroll,
}) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <Box
      position={scroll ? "fixed" : "sticky"}
      top="0"
      w="100%"
      zIndex="
    100"
      overflow="hidden"
    >
      {ypath.filled && (
        <Box position="relative">
          <Image
            w="100%"
            h="50vh"
            src={imagePath + ypath.backdrop_path}
            alt=""
          />
          <Box>
            <Text
              position="absolute"
              top="8px"
              left="16px"
              fontSize="4xl"
              fontWeight="extrabold"
              textShadow="1px 1px #4a4848"
            >
              {ypath.original_title}{" "}
            </Text>
            <Text
              position="absolute"
              top="80px"
              left="16px"
              fontSize="3xl"
              textShadow="1px 1px #4a4848"
              fontWeight="bold"
            >
              {ypath.overviews}
            </Text>
            <Text
              position="absolute"
              color="#FFFFFF"
              top="130px"
              left="16px"
              textShadow="1px 1px #000000"
              fontSize="20"
            >
              {ypath.overview}
            </Text>

            <Button
              position="absolute"
              top="8px"
              right="16px"
              aria-label="Search database"
              onClick={() => setypath({ youtubePath: "" })}
            >
              X
            </Button>
            <Button
              position="absolute"
              bottom="50"
              right="50%"
              colorScheme="gray"
              variant="solid"
              onClick={() => setShowTrailer(true)}
            >
              Watch the Trailer
            </Button>
            {showTrailer && (
              <Box>
                <Button
                  position="absolute"
                  zIndex="200"
                  top="80px"
                  right="50%"
                  borderRadius="50%"
                  textShadow="1px 1px #000000"
                  onClick={() => setShowTrailer(false)}
                >
                  X
                </Button>
                <iframe
                  title={ypath.original_title}
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: 0,
                    width: "100%",
                    height: "43.6vh",
                  }}
                  src={`https://www.youtube.com/embed/${ypath.youtubePath}`}
                  frameBorder="0"
                />
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DIsplayData;

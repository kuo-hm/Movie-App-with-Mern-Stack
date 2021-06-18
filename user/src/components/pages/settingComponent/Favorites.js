import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Favorites = () => {
  return (
    <Box className="favorites">
      <Grid
        h="80vh"
        templateRows="repeat(2, 5fr)"
        templateColumns="repeat(4, 10fr)"
        gap={18}
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Heading>Favorites</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text>Sort By Tv/Movie</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text>Release date if not out </Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text>Watching//Completed//Dropped</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Favorites;

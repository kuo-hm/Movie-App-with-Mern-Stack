import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
  return (
    <Box className="Security">
      <Grid
        h="80vh"
        templateRows="repeat(2, 5fr)"
        templateColumns="repeat(4, 10fr)"
        gap={18}
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Heading>Security</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text>Email</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text>Type your old Password</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text>RE New Password</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Settings;

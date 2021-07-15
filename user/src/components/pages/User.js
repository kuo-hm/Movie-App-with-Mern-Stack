import { Box, Flex, Text, Heading, Stack } from "@chakra-ui/react";
import SideNav from "./subComponent/SideNav";
import FileBase from "react-file-base64";
import Dashboard from "./settingComponent/Dashboard";
import Favorites from "./settingComponent/Favorites";
import Settings from "./settingComponent/Settings";
import { useState } from "react";

const User = () => {
  const [tabSelected, setTabSelected] = useState("dashboard");
  return (
    <Stack>
      {/* Side Nav */}
      <Box>
        <SideNav tabSelected={setTabSelected} />
      </Box>
      {/* Desktop */}
      <Flex display={["none", "none", "flex", "flex"]}>
        <Box ml="20%">
          {tabSelected === "dashboard" && <Dashboard />}
          {tabSelected === "favorites" && <Favorites />}
          {tabSelected === "settings" && <Settings />}
        </Box>
      </Flex>
      {/* Mobile */}
      <Flex display={["flex", "flex", "none", "none"]}>
        <Box bg="green.100" flex="1">
          Info
          <Heading>Info</Heading>
          <Text>{localStorage.getItem("username")}</Text>
          <Text>Image</Text>
          <FileBase />
          <Text>Birth Day</Text>
          <Text>Bio</Text>
          {/* Security */}
          <Heading>Security</Heading>
          <Text>Email</Text>
          <Text>Type your old Password</Text>
          <Text>Your New Password</Text>
          <Text>RE New Password</Text>
          {/* Favorites */}
          <Heading>Favorites</Heading>
          <Text>Sort By Tv/Movie</Text>
          <Text>Release date if not out </Text>
          <Text>Watching//Completed//Dropped</Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default User;

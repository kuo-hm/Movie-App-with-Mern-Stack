import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  HStack,
  DarkMode,
} from "@chakra-ui/react";
import { useState } from "react";
import FileBase from "react-file-base64";
import SideNav from "./subComponent/SideNav";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import DatePicker from "react-modern-calendar-datepicker";
import { DatePicker, RangeDatePicker } from "@y0c/react-datepicker";
import "@y0c/react-datepicker/assets/styles/calendar.scss";

const User = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <Stack>
      {/* Side Nav */}
      <Box>
        <SideNav />
      </Box>
      {/* Desktop */}
      <Flex display={["none", "none", "flex", "flex"]}>
        <Box ml="20%">
          <Heading>Dashboard</Heading>
          <HStack>
            <Text>Username:</Text>
            <Text>{localStorage.getItem("username")}</Text>
          </HStack>
          <Text>Change your Avatar</Text>
          <FileBase />
          <Text>Birth Day</Text>
          <DarkMode>
            {/* <DatePicker
              colorPrimary="#FF0000"
              backgroundColor="#FF0000"
              colorPrimaryLight="#FF0000"
              value={selectedDay}
              onChange={setSelectedDay}
              inputPlaceholder="Select a day"
              shouldHighlightWeekends
            /> */}
            <DatePicker showToday />
          </DarkMode>
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

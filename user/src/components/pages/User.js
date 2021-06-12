import { Box, Flex, Text, Heading, Stack, Input } from "@chakra-ui/react";

import FileBase from "react-file-base64";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import "@syncfusion/ej2-base/styles/bootstrap.css";
import "@syncfusion/ej2-buttons/styles/bootstrap.css";
import "@syncfusion/ej2-inputs/styles/bootstrap.css";
import "@syncfusion/ej2-popups/styles/bootstrap.css";
import "@syncfusion/ej2-react-calendars/styles/bootstrap.css";
import SideNav from "./subComponent/SideNav";
import { useState } from "react";

const User = () => {
  const [selectedDay, setSelectedDay] = useState();

  return (
    <Stack>
      {/* Side Nav */}
      <Box>
        <SideNav />
      </Box>
      {/* Desktop */}
      <Flex display={["none", "none", "flex", "flex"]}>
        <Box ml="20%">
          <Box className="Dashboard">
            <Heading>Dashboard</Heading>
            <Text>Display Name: {localStorage.getItem("username")}</Text>
            <Input placeholder="Change ur Display Name (optional)" />
            <br />
            <br />
            <Text>Change your Avatar </Text>
            <img src={selectedDay} alt="" />
            <FileBase
              type="file"
              multiline={false}
              onDone={({ base64 }) => setSelectedDay(base64)}
            />
            {/* <StyledDropzone /> */}
            <br />
            <br />
            <Text>Birth Day</Text>
            <DatePickerComponent
              id="datetimepicker"
              placeholder="Select a date and time"
            />
            <Text>Bio</Text>
          </Box>
          <Box className="Security" display="none">
            <Heading>Security</Heading>
            <Text>Email</Text>
            <Text>Type your old Password</Text>
            <Text>Your New Password</Text>
            <Text>RE New Password</Text>
          </Box>
          {/* Favorites */}{" "}
          <Box className="favorites" display="none">
            <Heading>Favorites</Heading>
            <Text>Sort By Tv/Movie</Text>
            <Text>Release date if not out </Text>
            <Text>Watching//Completed//Dropped</Text>
          </Box>
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

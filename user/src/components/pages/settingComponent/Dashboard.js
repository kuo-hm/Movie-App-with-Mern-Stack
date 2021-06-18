import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import undifinedUser from "../../../assets/undifinedUser.png";

import FileBase from "react-file-base64";
import "@syncfusion/ej2-base/styles/bootstrap.css";
import "@syncfusion/ej2-buttons/styles/bootstrap.css";
import "@syncfusion/ej2-inputs/styles/bootstrap.css";
import "@syncfusion/ej2-popups/styles/bootstrap.css";
import "@syncfusion/ej2-react-calendars/styles/bootstrap.css";
import { useState } from "react";

const Dashboard = () => {
  const [avatar, setAvatar] = useState();
  const [displayName, setDisplayName] = useState("");
  const handleDisplayName = (e) => {
    setDisplayName(e.target.value);
  };
  return (
    <Box className="Dashboard">
      <Heading>Dashboard</Heading>
      <Grid
        h="80vh"
        templateRows="repeat(2, 5fr)"
        templateColumns="repeat(4, 10fr)"
        gap={18}
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Avatar
            mt="5"
            size="lg"
            name="Avatar"
            src={avatar ? avatar : undifinedUser}
          />

          <Text mt="5">Display Name: {localStorage.getItem("username")} </Text>
          <Input
            mt="5"
            value={displayName}
            onChange={handleDisplayName}
            placeholder="Change ur Display Name (optional)"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text mt="5" mb="5">
            Change your Avatar{" "}
          </Text>
          <FileBase
            type="file"
            multiline={false}
            onDone={({ base64 }) => setAvatar(base64)}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text mb="5">Birth Day</Text>
          <DatePickerComponent
            id="datetimepicker"
            placeholder="Select a date and time"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Textarea placeholder="Your Bio" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;

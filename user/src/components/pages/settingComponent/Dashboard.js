import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import undifinedUser from "../../../assets/undifinedUser.png";
import { useDispatch } from "react-redux";
import { postInfo } from "../../../features/auth/infoSlice";
import FileBase from "react-file-base64";
import "./DatePicker.css";
import { useState } from "react";
import DatePicker from "react-date-picker";
import Compress from "react-image-file-resizer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [bio, SetBio] = useState();
  const [avatar, setAvatar] = useState();
  const [birthday, setBirthday] = useState();
  const [displayName, setDisplayName] = useState("");
  const handleDisplayName = (e) => {
    setDisplayName(e.target.value);
  };
  const toast = useToast();
  const onFileResize = (e) => {
    const file = e.target.files[0];

    Compress.imageFileResizer(
      file, // the file from input
      480, // width
      480, // height
      "JPEG", // compress format WEBP, JPEG, PNG
      70, // quality
      0, // rotation
      (uri) => {
        // console.log(uri);
        setAvatar(uri);
        // You upload logic goes here
      },
      "base64" // blob or base64 default base64
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!birthday) return;
    var dd = birthday.getDate();
    var mm = birthday.getMonth() + 1;

    var yyyy = birthday.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    var today = dd + "/" + mm + "/" + yyyy;
    const info = {
      username: displayName,
      avatar: avatar,
      bio: bio,
      birthday: today,
    };
    dispatch(postInfo(info));
    if (localStorage.getItem("errorInfo")) {
      toast({
        title: localStorage.getItem("errorRegister"),
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      localStorage.removeItem("errorRegister");
    } else {
      toast({
        title: "Your Infos Got updated!",
        status: "Success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Box className="Dashboard">
      <Heading>Dashboard</Heading>
      <Grid
        h="60vh"
        templateRows="repeat(2, 5fr)"
        templateColumns="repeat(4, 10fr)"
        gap={15}
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
          {/* <FileBase
            type="file"
            multiline={false}
            onDone={({ base64 }) => setAvatar(base64)}
          /> */}
          <input
            type="file"
            id="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={onFileResize}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text mb="5">Birth Day</Text>
          <DatePicker
            onChange={setBirthday}
            value={birthday}
            format="dd-MM-yyyy"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Textarea
            placeholder="Your Bio"
            onChange={(e) => SetBio(e.target.value)}
          ></Textarea>
        </GridItem>
        <GridItem rowSpan={2} colSpan={4}>
          <Button w="100%" onClick={handleSubmit}>
            Submit
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;

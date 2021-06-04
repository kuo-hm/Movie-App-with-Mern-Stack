import { Box, UnorderedList, ListItem, Text, Heading } from "@chakra-ui/react";

const User = () => {
  return (
    <Box ml="10">
      {/* Side Nav */}
      <Heading>Side Nav </Heading>

      <UnorderedList spacing={3}>
        <ListItem>Info</ListItem>
        <ListItem>Security </ListItem>
        <ListItem>Favorites </ListItem>
      </UnorderedList>
      {/* Info */}
      <Heading>Info</Heading>
      <Text>{localStorage.getItem("username")}</Text>
      <Text>Image</Text>
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
  );
};

export default User;

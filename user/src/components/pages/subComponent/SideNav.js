import { Box, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import "./SideNav.css";
const SideNav = () => {
  return (
    <Box className="navbar" mt="98px">
      <List className="navbar-nav">
        <ListItem className="nav-item">
          <Box className="nav-link nav-link-das">
            <Icon as={AiOutlineDashboard} />
            <Text className="link-text">Dashboard</Text>
          </Box>
        </ListItem>

        <ListItem className="nav-item">
          <Box className="nav-link nav-link-set">
            <Icon as={BsGear} />
            <Text className="link-text">Settings</Text>
          </Box>
        </ListItem>

        <ListItem className="nav-item">
          <Box className="nav-link nav-link-fav">
            <Icon as={FaHeart} />
            <span className="link-text">Favorites</span>
          </Box>
        </ListItem>

        <ListItem className="nav-item" id="themeButton">
          <Box className="nav-link">
            <Icon as={AiOutlineDashboard} />
            <span className="link-text">Themify</span>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideNav;

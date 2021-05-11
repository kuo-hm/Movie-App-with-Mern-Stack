import { useState, useEffect } from "react";
import axios from "axios";
import { Text, Button, VStack } from "@chakra-ui/react";

const PriavteScreen = ({ history }) => {
  const [error, seterror] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        seterror("You are not authorized");
      }
    };
    fetchPrivateData();
  }, [history]);
  const logout = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };
  return error ? (
    <span>{error}</span>
  ) : (
    <VStack>
      <Text>{privateData}</Text>
      <Button colorScheme="teal" variant="ghost" type="submit" onClick={logout}>
        Logout
      </Button>
    </VStack>
  );
};

export default PriavteScreen;

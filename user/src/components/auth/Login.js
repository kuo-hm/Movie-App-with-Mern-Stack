import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isLogged, incrementAsync } from "../../features/logged/loggedSlice";
import {
  Input,
  VStack,
  Stack,
  InputGroup,
  Button,
  InputLeftElement,
  FormLabel,
  FormControl,
  Tag,
  TagLabel,
  // Alert,
  // AlertIcon,
  // AlertTitle,
  // AlertDescription,
  useToast,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Flip from "react-reveal/Flip";

import { Container, HStack } from "@chakra-ui/layout";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  // isLogged
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const login = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      dispatch(isLogged(true));
      // dispatch(username(data.usernames.username));
      dispatch(incrementAsync());
      localStorage.setItem("authToken", data.token);
      history.push("/info");
    } catch (error) {
      toast({
        title: error.response.data.error,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const bg = useColorModeValue("white", "#1A202C");
  return (
    <VStack>
      <Flip left>
        <HStack
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bgGradient="linear( #a18cd1, #fbc2eb)"
        >
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" p="5" bg={bg}>
            <Container mb="5">
              <VStack>
                <Text fontSize="5xl">Hello</Text>
                <Text fontSize="xl">Sign in to your account</Text>
              </VStack>
            </Container>

            <form type="submit">
              <Stack spacing={3}>
                {/* Email */}
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <InputGroup size="md">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<AiOutlineMail color="gray.300" />}
                    />
                    <Input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />{" "}
                  </InputGroup>
                </FormControl>
                {/* Password */}
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<RiLockPasswordLine color="gray.300" />}
                    />
                    <Input
                      pr="4.5rem"
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </InputGroup>
                </FormControl>
                {/* Forgot Password */}
                <Tag
                  size="sm"
                  key="sm"
                  variant="ghost"
                  colorScheme="blue"
                  r="100"
                >
                  <Link to="/forgotpassword">
                    <TagLabel color="gray">Forgot Password ?</TagLabel>
                  </Link>
                </Tag>
                {/* Submite */}
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  type="submit"
                  onClick={login}
                >
                  Log In
                </Button>
                {/* Regsiter */}
                <Tag variant="ghost" colorScheme="blue">
                  <Link to="/register">
                    <TagLabel color="gray">
                      Do not have an account ? Register!!!
                    </TagLabel>
                  </Link>
                </Tag>
              </Stack>
            </form>
          </Box>
          <Box maxW="sm" p="8">
            <Container mb="5">
              <VStack>
                <Text fontSize="5xl">Welcome Back!</Text>
                <Text fontSize="xl">
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..." "There is no one who
                  loves pain itself, who seeks after it and wants to have it,
                  simply because it is pain..."
                </Text>
              </VStack>
            </Container>
          </Box>
        </HStack>
      </Flip>
    </VStack>
  );
};

export default Login;

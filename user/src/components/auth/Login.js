import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isLogged } from "../../features/logged/loggedSlice"; //incrementAsync
import { postLogin } from "../../features/auth/loginSlice";
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
  useToast,
  Box,
  Text,
  useColorModeValue,
  Flex,
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
    // dispatch(postLogin({ email: "", password: "" }));
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const Login = async (e) => {
    e.preventDefault();

    const user = { email: email, password: password };
    await dispatch(postLogin(user));
    if (localStorage.getItem("error")) {
      toast({
        title: localStorage.getItem("error"),
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      localStorage.removeItem("error");
    } else {
      dispatch(isLogged(true));
      history.push("/info");
    }
  };
  const bg = useColorModeValue("white", "#1A202C");
  return (
    <VStack>
      <Flip left>
        {/* -------------------Desktop------------------- */}
        <Flex display={["none", "none", "flex", "flex"]}>
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
                    onClick={Login}
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
            {/* -------------------The right Text------------------- */}
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
        </Flex>
        {/* -------------------Mobile Content ------------------- */}
        <Flex
          w="100vw"
          display={["flex", "flex", "none", "none"]}
          zIndex={20}
          align="center"
          overflowY="auto"
          flexDir="column"
        >
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            p="5"
            bgGradient="linear( #a18cd1, #fbc2eb)"
          >
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
                  onClick={Login}
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
        </Flex>
      </Flip>
    </VStack>
  );
};

export default Login;

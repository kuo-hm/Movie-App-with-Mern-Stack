import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  VStack,
  Stack,
  InputGroup,
  Button,
  FormLabel,
  FormControl,
  Tag,
  TagLabel,
  useToast,
  HStack,
  Box,
  Container,
  Text,
  useColorModeValue,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postRegister } from "../../features/auth/registerSlice";

import Flip from "react-reveal/Flip";

import { AiOutlineMail } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";

const Register = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const dispatch = useDispatch();

  const toast = useToast();
  const bg = useColorModeValue("white", "#1A202C");
  useEffect(() => {}, []);
  const register = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      setPassword("");
      setRePassword("");
      toast({
        title: "Your Password don't match!!",
        description: "Please check your Passwords.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    const user = { email: email, password: password, username: username };
    await dispatch(postRegister(user));
    if (localStorage.getItem("errorRegister")) {
      toast({
        title: localStorage.getItem("errorRegister"),
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      localStorage.removeItem("errorRegister");
    } else {
      history.push("/login");
    }
  };

  return (
    <VStack>
      <Flip right>
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
                  <Text fontSize="5xl">Hello,Friend!</Text>
                </VStack>
              </Container>
              <form>
                <Stack spacing={3}>
                  {/* UserName */}
                  <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <InputGroup size="md">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<RiUser3Line color="gray.300" />}
                      />
                      <Input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        isRequired="true"
                      />{" "}
                    </InputGroup>
                  </FormControl>
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
                        isRequired="true"
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
                        isRequired="true"
                      />
                    </InputGroup>
                  </FormControl>

                  {/* Confirm Password */}
                  <FormControl id="repassword">
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup size="md">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<RiLockPasswordLine color="gray.300" />}
                      />
                      <Input
                        pr="4.5rem"
                        type="password"
                        placeholder="Enter Re  password"
                        onChange={(e) => setRePassword(e.target.value)}
                        value={repassword}
                        isRequired="true"
                      />
                    </InputGroup>
                  </FormControl>
                  {/* Submite */}
                  <Button
                    colorScheme="teal"
                    variant="ghost"
                    type="submit"
                    onClick={register}
                  >
                    Register
                  </Button>
                  <Tag variant="ghost" colorScheme="blue">
                    <Link to="/login">
                      <TagLabel color="gray">
                        Already have Account ? Login!!!
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
                  <Text fontSize="5xl">Glad to see you!</Text>
                  <Text fontSize="xl">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
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
                <Text fontSize="5xl">Hello,Friend!</Text>
              </VStack>
            </Container>
            <form>
              <Stack spacing={3}>
                {/* UserName */}
                <FormControl id="username">
                  <FormLabel>Username</FormLabel>
                  <InputGroup size="md">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<RiUser3Line color="gray.300" />}
                    />
                    <Input
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      isRequired="true"
                    />{" "}
                  </InputGroup>
                </FormControl>
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
                      isRequired="true"
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
                      isRequired="true"
                    />
                  </InputGroup>
                </FormControl>

                {/* Confirm Password */}
                <FormControl id="repassword">
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<RiLockPasswordLine color="gray.300" />}
                    />
                    <Input
                      pr="4.5rem"
                      type="password"
                      placeholder="Enter Re  password"
                      onChange={(e) => setRePassword(e.target.value)}
                      value={repassword}
                      isRequired="true"
                    />
                  </InputGroup>
                </FormControl>
                {/* Submite */}
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  type="submit"
                  onClick={register}
                >
                  Register
                </Button>
                <Tag variant="ghost" colorScheme="blue">
                  <Link to="/login">
                    <TagLabel color="gray">
                      Already have Account ? Login!!!
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

export default Register;

import { useState, useEffect } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Link,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { isLogged } from "../features/logged/loggedSlice";

import { useDispatch, useSelector } from "react-redux";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/batman-tdk-1.svg";

export const Navbar = ({ history }) => {
  const islogged = useSelector((state) => state.logged.islogged);
  const [logged, setLogged] = useState(islogged);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setLogged(true);
      dispatch(isLogged(logged));
    } else setLogged(false);
  }, [logged, dispatch]);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Link href="/" passHref>
        <Image src={logo} borderRadius="full" boxSize="100px" />
      </Link>

      <Spacer />

      <Flex justify="flex-end" right="1rem" align="center">
        {/* Desktop */}

        <Flex display={["none", "none", "flex", "flex"]}>
          {islogged ? (
            <Link href="/login" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                my={5}
                w="100%"
                onClick={() => localStorage.removeItem("authToken")}
              >
                Logout
              </Button>
            </Link>
          ) : (
            <Link href="/login" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Login
              </Button>
            </Link>
          )}

          <Link href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Navbar;

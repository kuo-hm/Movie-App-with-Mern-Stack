import { Spacer } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { postPasswordReset } from "../../features/auth/passowrdresetSlice";

import {
  useToast,
  VStack,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
  Box,
} from "@chakra-ui/react";
import Flip from "react-reveal/Flip";

import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";

const PasswordReset = ({ match, history }) => {
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const parms = match.params.resetToken;
  const resetPasswordHandler = async (e) => {
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
      return;
    }

    await dispatch(postPasswordReset({ password: password, parms: parms }));
    if (localStorage.getItem("errorResP")) {
      toast({
        title: localStorage.getItem("errorResP"),
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      localStorage.removeItem("errorResP");
    } else {
      toast({
        title: "Password Reseted ",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      history.push("/login");

      localStorage.removeItem("errorFgp");
    }
  };
  return (
    <VStack>
      <Flip left>
        <Box minH="sm" borderWidth="1px" borderRadius="lg" p="5">
          <form>
            <Stack spacing={3}>
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
                    required
                  />
                </InputGroup>
              </FormControl>
              <Spacer />
              {/* Submite */}
              <Button
                colorScheme="teal"
                variant="ghost"
                type="submit"
                onClick={resetPasswordHandler}
              >
                Reset Password
              </Button>
            </Stack>
          </form>
        </Box>
      </Flip>
    </VStack>
  );
};

export default PasswordReset;

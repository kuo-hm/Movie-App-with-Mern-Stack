import { Spacer } from "@chakra-ui/layout";
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

import axios from "axios";
import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";

const PasswordReset = ({ match }) => {
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const toast = useToast();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

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
    try {
      const { data } = await axios.put(
        `/api/auth/passwordreset/${match.params.resetToken}`,
        { password },
        config
      );
      console.log(data.data);
      toast({
        title: data.data,
        description: "test",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: error.response.data.error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
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

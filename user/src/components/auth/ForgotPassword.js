import { useState } from "react";
import axios from "axios";
import {
  Heading,
  Stack,
  VStack,
  FormControl,
  Input,
  Button,
  useToast,
  FormLabel,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Flip from "react-reveal/Flip";

import { AiOutlineMail } from "react-icons/ai";

const ForgotPassword = ({ history }) => {
  const toast = useToast();

  const [email, setEmail] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/auth/forgotpwd",
        { email },
        config
      );
      toast({
        title: data.data,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      history.push("/login");
    } catch (error) {
      setEmail("");
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
        <Stack spacing={3}>
          <Heading size="2xl" isTruncated>
            Forgot Password
          </Heading>
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
          <Button
            colorScheme="teal"
            variant="ghost"
            type="submit"
            onClick={forgotPasswordHandler}
          >
            Reset Password{" "}
          </Button>
        </Stack>
      </Flip>
    </VStack>
  );
};

export default ForgotPassword;

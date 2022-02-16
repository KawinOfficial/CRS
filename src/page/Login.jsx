import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Stack,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaSignInAlt, FaUserAlt, FaLock, FaCaretLeft } from "react-icons/fa";
import Car from "../components/lottie/Car";

import Swal from "sweetalert2";
import axios from "axios";

export default function Login() {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const urlPath = "http://10.1.8.253:80/CRS/API/login.php";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    if (loginForm.username == "" || loginForm.password == "") {
      Swal.fire({
        icon: "warning",
        title: "Please enter Username and Password",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      axios.post(urlPath, { ...loginForm }).then(({ data: { state } }) => {
        if (state) {
          Swal.fire({
            icon: "success",
            title: "Login success",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => navigate("/History", { state: loginForm }));
        } else {
          Swal.fire({
            icon: "error",
            title: "Incorrect username or password ",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
    }
  };

  return (
    <>
      <Box h="100vh" bg="#EDF2F7">
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          h="83vh"
        >
          <VStack>
            <Car />
            <Box bg="white" rounded="md" boxShadow={"lg"} p={2} m={0}>
              <Stack spacing={2} pb="5">
                <Heading
                  className="SNC"
                  fontSize="6xl"
                  textAlign="center"
                  textColor="red"
                >
                  SNC
                </Heading>
                <Heading
                  fontSize="3xl"
                  bgGradient="linear(to-l, #b92b27, #1565C0)"
                  bgClip="text"
                  px={2}
                >
                  Car Reservation Service
                </Heading>

                <VStack pt={5}>
                  <FormControl isRequired w="75%" onSubmit={handleSubmit}>
                    <FormLabel fontSize={"xl"}>Username</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={"none"}
                        children={<Icon as={FaUserAlt} color={"gray.500"} />}
                      />
                      <Input
                        id="username"
                        placeholder="Type your username"
                        onChange={({ target: { value: username } }) =>
                          setLoginForm({ ...loginForm, username })
                        }
                      />
                    </InputGroup>
                    <FormLabel fontSize={"xl"} pt="3">
                      Password
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={"none"}
                        children={<Icon as={FaLock} color={"gray.500"} />}
                      />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Type your password"
                        onChange={({ target: { value: password } }) =>
                          setLoginForm({ ...loginForm, password })
                        }
                      />
                    </InputGroup>
                    <Box textAlign="center" pt="8">
                      <Button
                        onClick={() => navigate("/Scheduler")}
                        type="submit"
                        colorScheme="messenger"
                        leftIcon={<Icon as={FaCaretLeft} />}
                        me={3}
                      >
                        Home
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        colorScheme="facebook"
                        leftIcon={<Icon as={FaSignInAlt} />}
                      >
                        Sign in
                      </Button>
                    </Box>
                  </FormControl>
                </VStack>
              </Stack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

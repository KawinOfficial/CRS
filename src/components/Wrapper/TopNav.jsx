import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Heading,
  Stack,
  Spacer,
  Icon,
  Box,
  Button,
  Tooltip,
  Link,
  Image,
} from "@chakra-ui/react";

import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

export default function TopNav({ page }) {
  const navigate = useNavigate();
  const urlPath = "http://10.1.8.253:80/CRS/API/logout.php";

  const handleSignOut = (e) => {
    e.preventDefault();
    axios.post(urlPath).then(({ data: { state } }) => {
      if (state) {
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Log out ERROR",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <>
      <Flex color="white" alignItems="center">
        <Heading className="SNC" px={2} fontSize="4xl">
          {/* <Image src="../../img/logo.png" /> */}
          <Link onClick={() => navigate("/Scheduler")}>SNC</Link>
        </Heading>
        <Spacer />
        <Text fontSize="lg">Car Reservation Service (CRS)</Text>
        <Spacer />
        <Box pe="2">
          <Stack direction="row">
            {/* Button */}
            <Tooltip label={page ? "Log in" : "Log out"}>
              <Button px="3" bg="none" onClick={handleSignOut}>
                <Icon as={FaSignOutAlt} />
              </Button>
            </Tooltip>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

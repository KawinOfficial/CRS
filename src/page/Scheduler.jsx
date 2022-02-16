import {
  Box,
  Stack,
  Text,
  Center,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loading from "../components/lottie/Loading";
import { List, Schedule } from "../components/Scheduler";
import { FaSearch } from "react-icons/fa";

import { BookingModal, CancelModal } from "../components/Modals";
import axios from "axios";

export default function Scheduler() {
  const [information, setInformation] = useState();
  const urlPath = "http://10.1.8.253:80/CRS/API/check-book.php";

  const getTable = () => {
    axios.post(urlPath, { code: "" }).then(({ data }) => {
      setInformation(data);
    });
  };

  useEffect(() => {
    const initPage = setTimeout(() => {
      getTable();
    }, 100);
    const timer5s = setInterval(() => {
      getTable();
    }, 5000);
    return () => {
      clearTimeout(initPage);
      clearInterval(timer5s);
    };
  }, []);

  if (information == undefined) {
    return <Loading />;
  }

  return (
    <>
      <Stack p={2}>
        <Accordion allowToggle defaultIndex={[0]}>
          {/* Calendar */}
          <AccordionItem>
            <AccordionButton>
              <Stack direction="row">
                <Text
                  className="font-thai"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  ปฏิทินการจอง
                </Text>
                <Text fontWeight="bold">(Reservation Calendar)</Text>
              </Stack>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel px={0}>
              <Center>
                <Box
                  bg="white"
                  rounded="md"
                  h={{ base: "74vh", md: "73vh" }}
                  w="98vw"
                  boxShadow="sm"
                  p={2}
                >
                  <Schedule information={information} />
                  {/* Action */}
                  <Stack direction="row" p={2} justifyContent="center">
                    {/* Booking */}
                    <BookingModal />
                    {/* Canceling */}
                    <CancelModal />
                  </Stack>
                </Box>
              </Center>
            </AccordionPanel>
          </AccordionItem>

          {/* list */}
          <AccordionItem>
            <AccordionButton>
              <Stack direction="row">
                <Text
                  className="font-thai"
                  fontWeight="bold"
                  textAlign="center"
                  fontSize="lg"
                >
                  รายการจองรถ
                </Text>
                <Text fontWeight="bold" fontSize="md">
                  (Reservation List)
                </Text>
              </Stack>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel px={0}>
              <Center>
                <Box
                  bg="white"
                  rounded="md"
                  h={{ base: "78vh", md: "73vh" }}
                  w="100vw"
                  boxShadow="sm"
                  p={1}
                >
                  {/* Search
                  <Stack direction="row">
                    <InputGroup w={{ md: "30%", base: "100%" }}>
                      <InputLeftElement
                        pointerEvents={"none"}
                        children={<Icon as={FaSearch} color={"gray.500"} />}
                      />
                      <Input id="Search" placeholder="Search..." />
                    </InputGroup>
                    <Button>Search</Button>
                  </Stack> */}
                  <List information={information} />
                </Box>
              </Center>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </>
  );
}

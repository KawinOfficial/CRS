import React, { useState, useEffect } from "react";
import {
  Stack,
  Text,
  Box,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Loading from "../components/lottie/Loading";
import { HistoryTab, ReturnTab } from "../components/History";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const urlPath = "http://10.1.8.253:80/crs/API/history.php";
const urlChk = "http://10.1.8.253:80/crs/API/check-book.php";
const urlAuthen = "http://10.1.8.253:80/crs/API/authen.php";

export default function History() {
  const navigate = useNavigate();
  const [historyInfo, setHistoryInfo] = useState();
  const [information, setInformation] = useState();
  const [search, setSearch] = useState("");

  const getHistory = () => {
    console.log(search);
    axios.post(urlPath, { search: search }).then(({ data }) => {
      setHistoryInfo(data);
    });
  };
  const getInformation = () => {
    axios.post(urlChk, { code: "" }).then(({ data }) => {
      setInformation(data);
    });
    axios.get(urlAuthen).then(({ data: { state } }) => {
      // console.log(state);
      if (!state) {
        navigate("/Login");
      }
    });
  };

  useEffect(() => {
    const initPage = setTimeout(() => {
      getHistory();
      getInformation();
    }, 100);
    const timer5s = setInterval(() => {
      getInformation();
    }, 5000);
    return () => {
      clearTimeout(initPage);
      clearInterval(timer5s);
    };
  }, []);

  if (historyInfo == undefined || information == undefined) {
    return <Loading />;
  }

  return (
    <>
      <Stack p={2}>
        <Center>
          <Box bg="white" rounded="md" h="89vh" w="98vw" boxShadow="sm" p={2}>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>
                  <Stack direction="row">
                    <Text
                      className="font-thai"
                      fontWeight="bold"
                      fontSize="md"
                      textAlign="center"
                    >
                      คืนกุญแจ
                    </Text>
                    <Text fontWeight="bold">(ReturnKey)</Text>
                  </Stack>
                </Tab>

                <Tab>
                  <Stack direction="row">
                    <Text
                      className="font-thai"
                      fontWeight="bold"
                      fontSize="md"
                      textAlign="center"
                    >
                      ประวัติ
                    </Text>
                    <Text fontWeight="bold">(History)</Text>
                  </Stack>
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <ReturnTab information={information} />
                </TabPanel>

                <TabPanel>
                  {/* Search */}
                  <Stack direction="row">
                    <InputGroup w={{ md: "30%", base: "100%" }}>
                      <InputLeftElement
                        pointerEvents={"none"}
                        children={<Icon as={FaSearch} color={"gray.500"} />}
                      />
                      <Input
                        id="Search"
                        placeholder="Search..."
                        onChange={({ target: { value: search } }) =>
                          setSearch(search)
                        }
                      />
                    </InputGroup>
                    <Button onClick={getHistory}>Search</Button>
                  </Stack>
                  <HistoryTab historyInfo={historyInfo} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Center>
      </Stack>
    </>
  );
}

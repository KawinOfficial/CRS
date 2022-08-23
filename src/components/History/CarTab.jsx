import React from "react";
import {
  Text,
  Stack,
  Icon,
  Grid,
  GridItem,
  VStack,
  Center,
  Box,
} from "@chakra-ui/react";
import { FaCarAlt } from "react-icons/fa";
import { CarModal } from "../Modals";

export default function CarTab({ carInfo }) {
  const removeChr = (info) => {
    let chr = info.replace("(", "");
    return chr.replace(")", "");
  };

  return (
    <>
      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
        gap={5}
        overflow="auto"
        maxH="75vh"
        p={3}
      >
        {carInfo.map((info, i) => (
          <GridItem key={i}>
            <Center
              shadow="lg"
              rounded="2xl"
              p={2}
              bgColor={info.status ? "" : "red.100"}
            >
              <Stack direction="row" minW="450px">
                <VStack mx={2}>
                  <Icon as={FaCarAlt} boxSize={90} />
                  <CarModal info={info} />
                </VStack>

                <Stack spacing={5}>
                  <Stack direction="row">
                    <Text
                      className="font-thai"
                      fontSize="md"
                      textAlign="center"
                    >
                      ประเภทรถ
                    </Text>
                    <Text fontSize="md">(Car type) :</Text>
                    <Text
                      className="font-thai"
                      fontSize="lg"
                      fontWeight="bold"
                      ps={7}
                    >
                      {removeChr(info.cars.split(" ")[1])}
                    </Text>
                  </Stack>

                  <Stack direction="row">
                    <Text
                      className="font-thai"
                      fontSize="md"
                      textAlign="center"
                    >
                      เลขทะเบียน
                    </Text>
                    <Text fontSize="md">(Car license) :</Text>
                    <Text fontSize="lg" fontWeight="bold" ps={1}>
                      {info.cars.split(" ")[0]}
                    </Text>
                  </Stack>

                  <Stack direction="row">
                    <Text
                      className="font-thai"
                      fontSize="md"
                      textAlign="center"
                    >
                      สถานะรถยนต์
                    </Text>
                    <Text fontSize="md" pe={6}>
                      (Status):
                    </Text>
                    {info.status ? (
                      <Text textColor="green" fontSize="lg" fontWeight="bold">
                        Available
                      </Text>
                    ) : (
                      <Text
                        textColor="red"
                        fontSize="lg"
                        fontWeight="bold"
                        className="blink-status"
                      >
                        Disable
                      </Text>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Center>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

import React from "react";
import {
  Stack,
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { ReturnKey } from "../Modals";

export default function ReturnTab({ information }) {
  return (
    <>
      {/* Table */}
      <Box
        overflow="auto"
        h={{ md: "76vh", base: "79vh" }}
        w={{ md: "95vw", base: "92vw" }}
        mt={3}
      >
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th textAlign="center" fontSize="small">
                ลำดับ <br />
                (No.)
              </Th>
              <Th fontSize="small" isTruncated>
                เลขทะเบียน <br />
                (Licanse)
              </Th>
              <Th fontSize="small">
                ผู้จอง <br />
                (Booking by)
              </Th>
              <Th textAlign="center" fontSize="small">
                ตั้งแต่เวลา <br />
                (Start)
              </Th>
              <Th textAlign="center" fontSize="small">
                จนถึงเวลา <br />
                (Return)
              </Th>
              <Th textAlign="center" fontSize="small">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {information.map((info, i) => (
              <React.Fragment key={i}>
                <Tr
                  _hover={{
                    backgroundColor: "#EEE",
                  }}
                >
                  <Td textAlign="center">{i + 1}</Td>
                  <Td isTruncated>{info.cars}</Td>
                  <Td fontWeight="bold" isTruncated>
                    {info.name}
                  </Td>
                  <Td textAlign="center" isTruncated>
                    {info.datetimeUse.slice(0, 16)}
                  </Td>
                  <Td textAlign="center" isTruncated>
                    {info.datetimeReturn.slice(0, 16)}
                  </Td>
                  <Td textAlign="center">
                    <ReturnKey info={info} />
                  </Td>
                </Tr>
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

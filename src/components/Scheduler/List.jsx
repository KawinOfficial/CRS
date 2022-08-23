import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { EditModal } from "../Modals";

export default function List({ information }) {
  const dateTimeFormat = (info) => {
    var dateSpilt = info.slice(0, 16).split(" ");
    var date = dateSpilt[0].split("-").reverse().join("/");
    return date + " " + dateSpilt[1];
  };

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th textAlign="center" fontSize="small">
                ลำดับ <br />
                (No.)
              </Th>
              <Th fontSize="small">
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
                  <Td>{info.cars}</Td>
                  <Td fontWeight="bold">{info.name}</Td>
                  <Td textAlign="center">{dateTimeFormat(info.datetimeUse)}</Td>
                  <Td textAlign="center">
                    {dateTimeFormat(info.datetimeReturn)}
                  </Td>
                  <Td textAlign="center">
                    <EditModal info={info} />
                  </Td>
                </Tr>
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

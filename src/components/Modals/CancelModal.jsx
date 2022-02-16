import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Text,
  useDisclosure,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { FaCheckCircle, FaTimesCircle, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

export default function BookingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [employee, setEmployee] = useState("");
  const urlChk = "http://10.1.8.253:80/CRS/API/check-book.php";
  const urlCancel = "http://10.1.8.253:80/CRS/API/return-cancel.php";

  const handleSubmit = () => {
    onClose();
    axios.post(urlChk, { code: employee }).then(({ data }) => {
      if (data != "") {
        Swal.fire({
          title: "ยกเลิกการจอง(Do you want to cancel booking?)",
          icon: "info",
          confirmButtonText: "ใช่ (Yes)",
          showCancelButton: true,
          cancelButtonText: "ไม่ใช่ (No)",
          confirmButtonColor: "green",
          cancelButtonColor: "red",
          html: `<p>ชื่อ-นามสกุล (Fullname):<b> ${data[0].name}</b></p>
        <p>หมายเลขรถ (Car license):<b> ${data[0].cars}</b></p>
        <p>เวลาจอง (Datetime reserved):</p>
        <p> <b>
          ${data[0].datetimeUse.slice(0, 16)} - ${data[0].datetimeReturn.slice(
            0,
            16
          )}
        </b></p>`,
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .post(urlCancel, { ...data[0], action: "cancel", parking: "-" })
              .then(({ data: { state } }) => {
                if (state) {
                  Swal.fire("ยกเลิกสำเร็จ (Cancel completed.)", "", "success");
                } else {
                  Swal.fire("ยกเลิกไม่สำเร็จ (Error cancel.)", "", "error");
                }
              });
          }
        });
      } else {
        Swal.fire({
          title: "รหัสพนักงานไม่ถูกต้อง (Employee ID incorrect.)",
          icon: "error",
          showCancelButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <>
      <Button colorScheme="red" variant="solid" w={180} onClick={onOpen}>
        <Stack direction="row">
          <Text
            className="font-thai"
            fontWeight="bold"
            fontSize="md"
            textAlign="center"
          >
            ยกเลิกจอง
          </Text>
          <Text fontWeight="bold" fontSize="md">
            (Canceling)
          </Text>
        </Stack>
      </Button>

      {/* Modal */}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack direction="row">
              <Text
                className="font-thai"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                ยกเลิกการจอง
              </Text>
              <Text fontWeight="bold" fontSize="md">
                (Canceling)
              </Text>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Stack direction="row">
              <Text className="font-thai" fontWeight="bold">
                ค้นหาด้วยรหัสพนักงาน
              </Text>
              <Text fontWeight="bold"> (Search Employee ID)</Text>
            </Stack>
            <InputGroup>
              <InputLeftElement
                pointerEvents={"none"}
                children={<Icon as={FaSearch} color={"gray.500"} />}
              />
              <Input
                id="Search"
                placeholder="Search..."
                onChange={({ target: { value: ID } }) => setEmployee(ID)}
              />
            </InputGroup>
          </ModalBody>

          {/* Button */}
          <ModalFooter>
            <Button
              colorScheme="green"
              leftIcon={<Icon as={FaCheckCircle} />}
              me={2}
              onClick={handleSubmit}
              disabled={employee == ""}
            >
              Confirm
            </Button>
            <Button
              onClick={onClose}
              colorScheme="red"
              leftIcon={<Icon as={FaTimesCircle} />}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

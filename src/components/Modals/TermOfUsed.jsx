import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Text,
  useDisclosure,
  Icon,
  Tooltip,
  HStack,
} from "@chakra-ui/react";

import { FaBookOpen } from "react-icons/fa";

export default function TermOfUsed() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const initPage = setTimeout(() => {
      onOpen();
    }, 100);
    return () => {
      clearTimeout(initPage);
    };
  }, []);
  return (
    <>
      <Tooltip hasArrow label="Term of use">
        <Button bg="none" onClick={onOpen}>
          <Icon as={FaBookOpen} />
        </Button>
      </Tooltip>

      {/* Modal */}
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgColor="blackAlpha.200">
            <Stack direction="row">
              <Text
                className="font-thai"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                ข้อกำหนดการใช้งาน
              </Text>
              <Text fontWeight="bold" fontSize="md">
                (Term of use)
              </Text>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />

          {/* Body */}
          <ModalBody>
            <Stack>
              <Text className="font-thai" fontWeight="bold" fontSize="md">
                การใช้งาน
              </Text>

              <Text className="font-thai" fontSize="sm">
                1. ผู้ใช้งานลงทะเบียนเพื่อ เช็คคิวรถ / จองคิวรถ / ยกเลิกคิวรถ
                ได้ที่เว็บไซต์นี้เท่านั้น
              </Text>

              <Text className="font-thai" fontSize="sm">
                2. ผู้ใช้งาน สามารถจองคิวรถ
                <b className="font-thai">ล่วงหน้าได้ ไม่เกิน 3 วัน</b>
              </Text>

              <Text className="font-thai" fontSize="sm">
                3. ผู้ใช้งาน สามารถจองคิวรถได้
                <b className="font-thai">รวมแล้วไม่เกิน 9 ชั่วโมง/วัน</b>
              </Text>

              <Text className="font-thai" fontSize="sm">
                4. ผู้ใช้งาน ต้อง
                <b className="font-thai">มีใบอนุญาตขับขี่รถยนต์</b>
                ตามที่กฎหมายกำหนด
              </Text>

              <HStack fontSize="sm">
                <Text className="font-thai">5. </Text>
                <Text className="font-thai" fontWeight="bold" textColor="blue">
                  ก่อนใช้รถยนต์
                </Text>
                <Text className="font-thai" fontSize="sm">
                  ติดต่อรับกุญแจได้ที่แผนก HR
                </Text>
              </HStack>

              <HStack fontSize="sm">
                <Text className="font-thai">6. </Text>
                <Text className="font-thai" fontWeight="bold" textColor="blue">
                  หลังใช้รถยนต์
                </Text>
                <Text className="font-thai" fontSize="sm">
                  จอดรถที่บริเวณลานจอด ซอย 13 และคืนกุญแจให้กับ HR
                </Text>
              </HStack>

              <Text className="font-thai" fontSize="sm">
                7. ผู้ใช้งาน
                <b className="font-thai">
                  {" "}
                  ควรส่งคืนรถภายในกรอบเวลาที่ได้จองไว้
                </b>
                กรณีเกิดเหตุสุดวิสัยต้องแจ้งทาง HR
                ทราบเพื่อประสานงานกับผู้จองคิวในช่วงเวลาถัดไป
              </Text>

              <Text className="font-thai" fontSize="sm">
                8. กรณีที่ผู้ใช้งาน
                <b className="font-thai"> ไม่ติดต่อรับกุญแจภายใน 1 ชั่วโมง</b>
                นับจากเวลาที่จองคิวไว้
                ขอสงวนสิทธิในการยกเลิกคิวจองตามการพิจารณาของ HR
              </Text>

              <Text className="font-thai" fontSize="sm">
                9.พบปัญหาการใช้งาน หรือมีเหตุฉุกเฉิน ติดต่อ HR เบอร์โทรศัพท์
                038-026-750
              </Text>

              <Text className="font-thai" fontWeight="bold" fontSize="sm">
                การเข้าใช้งานเว็บไซต์
              </Text>
              <Text className="font-thai" fontSize="sm">
                1. กรุณาระบุรหัสพนักงาน 7 หลัก (นับจากด้านหลัง)
              </Text>
              <Text className="font-thai" fontSize="sm">
                2. กรอกข้อมูลและตรวจสอบข้อมูลให้ครบถ้วน
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

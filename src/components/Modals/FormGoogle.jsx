import React from "react";
import { Box, Text, Button, Badge } from "@chakra-ui/react";

export default function FormGoogle() {
  return (
    <>
      <Box mb={5} bgColor="#eee" pt={2} textAlign="center">
        <Text className="font-thai" fontWeight="bold">
          แบบประเมินความพึงพอใจของผู้ใช้งานเว็บไซต์
          <Badge
            className="blink-status"
            colorScheme="yellow"
            variant="solid"
            ml={2}
            rounded="full"
          >
            NEW
          </Badge>
        </Text>
        <Box
          justifyContent="center"
          alignItems="center"
          my={2}
          fontSize={{ base: "sm", md: "md" }}
          px={3}
        >
          <Text className="font-thai">
            ขอความร่วมมือผู้ใช้งานทุกท่านทำแบบประเมินภายใน
            <b className="text-sp2">วันที่ 30 เม.ย. 2565</b>
          </Text>
          <Text className="font-thai">
            <b className="text-sp">หากไม่ประเมิน </b>
            รหัสพนักงานของท่านจะไม่สามารถใช้งานระบบได้
            <b className="text-sp"> หลังจากวันที่ 15 พ.ค. 2565 </b>เป็นต้นไป
          </Text>
        </Box>

        <Button
          my={1}
          colorScheme="facebook"
          className="font-thai"
          shadow="lg"
          rounded="full"
          size="sm"
          fontSize={{ base: "sm", md: "md" }}
          onClick={() =>
            (window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSd-JL5EKpHuxPSEPoxZIQkJqchbvPA-g1ZmCW26fjpbd3EkPA/viewform")
          }
        >
          ประเมินได้ที่นี่
        </Button>

        <Text className="font-thai" fontSize="sm">
          หมายเหตุ : หากทำแบบประเมินแล้วสามารถกดปิดได้ในการใช้งานครั้งต่อไป
        </Text>
      </Box>
    </>
  );
}

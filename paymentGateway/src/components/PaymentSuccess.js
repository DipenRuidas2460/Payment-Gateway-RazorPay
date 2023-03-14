import React from "react";
import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccess() {
  const searchQuery = useSearchParams()[0];
  const referenceNumber = searchQuery.get("reference");
  return (
    <Box>
      <VStack h={"100vh"} justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfull</Heading>
        <Text>Reference No.{referenceNumber}</Text>
      </VStack>
    </Box>
  );
}

export default PaymentSuccess;

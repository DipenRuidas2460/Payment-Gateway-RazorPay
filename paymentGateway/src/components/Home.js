import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

function Home() {
  const checkoutHandler = async (amount) => {
    const { data: { key } } = await axios.get("http://localhost:4000/api/getkey")
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Dipen Ruidas",
      description: "Learning for Payment gateway",
      image:
        "https://media.gettyimages.com/id/1092658864/photo/confident-young-man-wearing-purple-t-shirt.jpg?s=612x612&w=gi&k=20&c=5dv9NthxzpzZ2znz_ZUlMNDZHlvwipbWq7DR5tfXkG8=",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentVerification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <Box>
        <Stack
          h={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={["column", "row"]}
        >
          <Card
            amount={5000}
            img={
              "https://shop.unicornstore.in/uploads/images/medium/021e73021344cc5dfbdb807ea76654ca.jpeg"
            }
            checkoutHandler={checkoutHandler}
          />
          <Card
            amount={3000}
            img={
              "https://in.canon/media/image/2022/11/01/6cb3de2b8918402c84c08b362ad44045_EOS+R6+Mark+II+RF24-105mm+f4L+IS+USM++front+slant.png"
            }
            checkoutHandler={checkoutHandler}
          />
        </Stack>
      </Box>
    </>
  );
}

export default Home;

import { VStack, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'

function Card({amount, img, checkoutHandler}) {
  return (
    <div>
      <VStack>
        <Image src={img} boxSize={"64"} objectFit={"cover"}/>
        <Text>₹{amount}</Text>
        <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
      </VStack>
    </div>
  )
}

export default Card

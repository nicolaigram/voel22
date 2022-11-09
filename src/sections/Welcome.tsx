import { Box, Center, Heading, Img } from '@chakra-ui/react'
import React from 'react'

export const Welcome = () => (
    <Center paddingBottom={"100px"} flexDirection="column">
        <Img paddingBottom="20px" src="/images/phelps.jpg" />
        <Heading>🥶 Vinter Ølympiske Lege 2022 🥇</Heading>
    </Center>
)
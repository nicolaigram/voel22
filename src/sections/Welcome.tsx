import { Box, Center, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const Welcome = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

    return (
        <Center paddingBottom={"100px"} flexDirection="column">
            <Img paddingBottom="20px" src="/images/phelps.jpg" zIndex="-9999" />
            {isDesktopOrLaptop ? (
                <Heading>🥶 Vinter Ølympiske Lege 2022 🥇</Heading>

            ) : (
                <>
                    <Heading> 🥶🥇</Heading>
                    <Heading>Vinter Ølympiske Lege</Heading>
                    <Heading> 2022</Heading>
                </>)}
            <Heading size="sm">Lørdag d. 19. november, Marielyst</Heading>
        </Center>
    )
}
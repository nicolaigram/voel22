import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { Games } from './Games'
import { GoogleSheetLink } from './GoogleSheetLink'
import { Standings } from './Standings'
import { Teams } from './Teams'
import { Welcome } from './Welcome'

export const Main = () => {
    return <Box paddingTop={"40px"}>
        <Welcome />
        <Teams/>
        <Games />
        <Standings />
        <GoogleSheetLink />
    </Box>
}
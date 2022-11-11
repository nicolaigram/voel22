import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../data'

export const Games = () => {
    const data = useContext(DataContext)
    const [games, setGames] = useState<any>([])
    useEffect(() => {
        setGames([data["Dyst 1 - Ansvarlige"], data["Dyst 2 - Ansvarlige"], data["Dyst 3 - Ansvarlige"], data["Dyst 4 - Ansvarlige"], data["Dyst 5 - Ansvarlige"], data["Dyst 6 - Ansvarlige"]])
    },[data])

    return <Center flexDirection={"column"} paddingBottom={"100px"}>
        <Box maxWidth={"80%"} paddingBottom={"40px"}>
            <Heading>Discipliner</Heading>
            <Text textAlign={"center"}>Herunder er de ansvarlige for at opfinde og afvikle hver enkelt disciplin</Text>
        </Box>
        {games.map((game: any) => renderGame(game))}
    </Center>
}

const renderGame = (game: any) => {
    if (!game) return
    const gameName = game[0]
    const gameMembers = game.slice(1, game.length)
    return <Box paddingBottom={"20px"}>
        <Heading size={"md"}>{gameName}</Heading>
        {gameMembers.map((name: any) => (
            <Text textAlign={"center"}>{name}</Text>
        ))}
    </Box>
}
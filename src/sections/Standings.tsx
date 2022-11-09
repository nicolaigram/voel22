import { Box, Center, Heading, Table, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../data'

export const Standings = () => {
    const data = useContext(DataContext)
    const [standings, setStandings] = useState<any>([])
    const [teams, setTeams] = useState<any>([])
    useEffect(() => {
        setTeams([data["Hold A"], data["Hold B"], data["Hold C"]].filter(e => !!e))
        setStandings([data["Dyst 1 - Score"], data["Dyst 2 - Score"], data["Dyst 3 - Score"], data["Dyst 4 - Score"], data["Dyst 5 - Score"]].filter(e => !!e))
    }, [data])

    return <Center flexDirection={"column"} paddingBottom={"100px"}>
        <Box paddingBottom={"40px"}>
            <Heading>Stilling</Heading>
        </Box>
        <Box>
            <Table variant={"simple"}>
                <Thead>
                    <Th>Disciplin</Th>
                    {teams.map((team: any) => {
                        const teamName = team[0]
                        return (
                            <Th>{teamName}</Th>
                        )
                    })}
                </Thead>
                {standings.map((row: any) => {
                    console.log(row)
                    const gameName = row[0]
                    const gameStandings = row.slice(1, row.length)
                    return (
                        <Tr>
                            <Td>{gameName}</Td>
                            {gameStandings.map((score: any) => (<Td>{score}</Td>))}
                        </Tr>
                    )
                })}
            </Table>
        </Box>
    </Center>
}
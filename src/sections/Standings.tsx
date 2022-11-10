import { Box, Center, Heading, Table, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../data'
import { useMediaQuery } from 'react-responsive'

export const Standings = () => {
    const data = useContext(DataContext)
    const [standings, setStandings] = useState<any>([])
    const [teams, setTeams] = useState<any>([])
    useEffect(() => {
        setTeams([data["Hold A"], data["Hold B"], data["Hold C"]].filter(e => !!e))
        setStandings([data["Dyst 1 - Score"], data["Dyst 2 - Score"], data["Dyst 3 - Score"], data["Dyst 4 - Score"], data["Dyst 5 - Score"]].filter(e => !!e))
    }, [data])
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

    return <Center flexDirection={"column"} paddingBottom={"100px"}>
        <Box paddingBottom={"40px"}>
            <Heading>Stilling</Heading>
        </Box>
        <Box>
            {isDesktopOrLaptop ? (
                <Table variant={"simple"} size={"sm"}>
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
                        const gameName = row[0]
                        const gameStandings = row.slice(1, row.length)
                        return (
                            <Tr>
                                <Td>{gameName}</Td>
                                {gameStandings.map((score: any) => (<Td>{score}</Td>))}
                            </Tr>
                        )
                    })}
                    <Tr>
                        <Td>Total</Td>
                        {teams.map((team: any, teamIndex: number) => {
                            let totalScore = 0
                            standings.forEach((row: any) => {
                                const score = Number(row[teamIndex + 1])
                                if (!Number.isNaN(score)) totalScore += score
                            })
                            return (
                                <Td>{totalScore}</Td>
                            )
                        })}
                    </Tr>
                </Table>
            ) : (
                <Box>
                    {standings.map((row: any) => {
                        console.log(row)
                        const gameName = row[0]
                        const gameStandings = row.slice(1, row.length)
                        return (
                            <Box paddingBottom={"30px"}>
                                <Heading size="sm" paddingBottom={"10px"}>{gameName}</Heading>
                                {gameStandings.map((score: any, index: number) => (<Text>{teams[index][0]}: {score}</Text>))}
                            </Box>
                        )
                    })}
                    <Box>
                        <Heading size="sm" paddingBottom={"10px"}>Total</Heading>
                        {teams.map((team: any, teamIndex: number) => {
                            const teamName = team[0]
                            let totalScore = 0
                            standings.forEach((row: any) => {
                                const score = Number(row[teamIndex + 1])
                                if (!Number.isNaN(score)) totalScore += score
                            })
                            return (
                                <Box><Text>{teamName}: {totalScore}</Text></Box>
                            )
                        })}
                    </Box>
                </Box>
            )}
        </Box>
    </Center>
}
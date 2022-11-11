import { Box, Center, Heading, Text } from '@chakra-ui/react';
import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../data';

export const Teams = () => {

    const data = useContext(DataContext)
    const [teams, setTeams] = useState<any>([])
    useEffect(() => {
        setTeams([data["Hold A"], data["Hold B"], data["Hold C"]].filter(e => !!e))
    }, [data])

    if (!data) return <h1>Loading</h1>

    return (
        <div>
            <Center flexDirection={"column"} paddingBottom={"100px"}>   
                <Box maxWidth={"80%"} paddingBottom={"40px"}>
                    <Heading>Hold</Heading>
                    <Text>Her er fordelingen af hold, som skal dyste om at vinde VØL22</Text>
                </Box>
                {teams.map((team: any) => renderTeam(team))}
            </Center>
        </div>
    )
}

const renderTeam = (team: any) => {
    if (!team) return
    const teamName = team[0]
    const teamMembers = team.slice(1, team.length)
    return <Box maxW="sm" paddingBottom="20px">
        <Heading size={"md"}>{teamName}</Heading>
        {teamMembers.map((name: any) => (
            <Text textAlign={"center"}>{name}</Text>
        ))}
    </Box>
}
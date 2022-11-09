import { Box, Center, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { DataContext } from '../data';

export const Teams = () => {

    const data = useContext(DataContext)

    if (!data) return <h1>Loading</h1>

    return (
        <div>
            <Center flexDirection={"column"} paddingBottom={"100px"}>   
                <Box>
                    <Heading>Hold</Heading>
                </Box>
                {renderTeam(data["Hold A"])}
                {renderTeam(data["Hold B"])}
                {renderTeam(data["Hold C"])}
            </Center>
        </div>
    )
}

const renderTeam = (team: any) => {
    if (!team) return
    const teamName = team[0]
    const teamMembers = team.slice(1, team.length)
    return <Box maxW="sm">
        <h2>{teamName}</h2>
        {teamMembers.map((name: any) => (
            <p>{name}</p>
        ))}
    </Box>
}
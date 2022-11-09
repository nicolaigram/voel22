import React from 'react';
import { Teams } from './sections/Teams';
import { Box, ChakraProvider } from '@chakra-ui/react'
import { DataContext, useGoogleSheetData } from './data';
import { Welcome } from './sections/Welcome';
import { Games } from './sections/Games';

function App() {
  const data = useGoogleSheetData()
  return (
    <ChakraProvider>
      <DataContext.Provider value={data}>
        <Box paddingTop={"40px"}>
          <Welcome />
          <Teams />
          <Games />
        </Box>
      </DataContext.Provider>
    </ChakraProvider>
  );
}


export default App;

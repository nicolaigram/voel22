import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { DataContext, useGoogleSheetData } from './data';
import { Main } from './sections/Main';

function App() {
  const data = useGoogleSheetData()
  return (
    <ChakraProvider>
      <DataContext.Provider value={data}>
        <Main />
      </DataContext.Provider>
    </ChakraProvider>
  );
}


export default App;

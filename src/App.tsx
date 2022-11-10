import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { DataContext, useGoogleSheetData } from './data';
import { Main } from './sections/Main';
import Fireworks from '@fireworks-js/react';

function App() {
  const data = useGoogleSheetData()
  return (
    <ChakraProvider>
      <DataContext.Provider value={data}>
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: '-999'
            // background: '#000'
          }}
        />
        <Main />

      </DataContext.Provider>
    </ChakraProvider>
  );
}


export default App;

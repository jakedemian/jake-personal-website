import { ChakraProvider, theme } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function testRender(component: React.ReactNode) {
  render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>{component}</BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  );
}

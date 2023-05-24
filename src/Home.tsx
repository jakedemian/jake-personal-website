import { Box, Switch, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bgColor="dark.background" w="100%" h="100vh">
        <Text>It is an app</Text>
        <Switch
          isChecked={colorMode === 'dark'}
          onChange={() => toggleColorMode()}
        ></Switch>
      </Box>
    </>
  );
};

export default Home;

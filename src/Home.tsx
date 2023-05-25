import {
  Flex,
  Grid,
  HStack,
  Switch,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import MenuButton from 'src/Menu/MenuButton';
import TypedText from 'src/Menu/TypedText';

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      flexDir="column"
      bgColor="dark.background"
      w="100%"
      h="100vh"
      overflow="hidden"
    >
      <HStack /* bgColor="gray.500" */ justifyContent="flex-end" p={2}>
        <Switch
          data-testid="theme-switcher"
          isChecked={colorMode === 'dark'}
          onChange={() => toggleColorMode()}
        ></Switch>
      </HStack>
      <VStack /* bgColor="gray.700" */ flex={1} justifyContent="center">
        <Grid
          templateColumns={{ base: '1fr', lg: '25% 75%' }}
          templateRows={{ base: '15% 85%', lg: '1fr' }}
          w={{ base: '100%', lg: 900 }}
          height={800}
          flex={[1, null]}
          margin="auto"
          p={{ base: 0, lg: 8 }}
          /* bgColor="gray.700" */
        >
          <VStack /* bgColor="gray.800" */ p={4}>
            <TypedText>Jake Demian</TypedText>
            <Flex flexDir={{ base: 'row', lg: 'column' }} gap={2}>
              <MenuButton>About</MenuButton>
              <MenuButton>Skillset</MenuButton>
              <MenuButton>Experience</MenuButton>
              <MenuButton>Contact</MenuButton>
            </Flex>
          </VStack>
          <VStack /* bgColor="gray.900" */>
            <Text>About</Text>
          </VStack>
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Home;

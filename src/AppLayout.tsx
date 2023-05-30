import {
  Box,
  Flex,
  Grid,
  HStack,
  Switch,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AnimatePresence } from 'framer-motion';

import MenuButton from 'src/Menu/MenuButton';
import TypedText from 'src/Menu/TypedText';
import { ROUTES } from 'src/common/Routes';
import Footer from 'src/components/Footer';

const AppLayout: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Flex
      flexDir="column"
      bgColor="dark.background"
      w="100%"
      minH="100vh"
      overflow="hidden"
    >
      <HStack justifyContent="flex-end" p={2}>
        <SunIcon />
        <Switch
          data-testid="theme-switcher"
          isChecked={colorMode === 'dark'}
          onChange={() => toggleColorMode()}
        ></Switch>
        <MoonIcon />
      </HStack>
      <VStack flex={1} justifyContent="center">
        <Grid
          templateColumns={{ base: '1fr', lg: '25% 75%' }}
          templateRows={{ base: '150px 1fr', lg: '1fr' }}
          w={{ base: '100%', lg: 900 }}
          margin="auto"
          p={{ base: 0, lg: 8 }}
          gap={{ base: 2, lg: 8 }}
        >
          <VStack p={4}>
            <TypedText>Jake Demian</TypedText>
            <Flex
              flexDir={{ base: 'row', lg: 'column' }}
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              gap={2}
              w="100%"
            >
              <MenuButton
                isSelected={location.pathname === ROUTES.ABOUT}
                onClick={() => navigate(ROUTES.ABOUT)}
              >
                About
              </MenuButton>
              <MenuButton
                isSelected={location.pathname === ROUTES.SKILLSET}
                onClick={() => navigate(ROUTES.SKILLSET)}
              >
                Skillset
              </MenuButton>
              <MenuButton
                isSelected={location.pathname === ROUTES.EXPERIENCE}
                onClick={() => navigate(ROUTES.EXPERIENCE)}
              >
                Experience
              </MenuButton>
              <MenuButton
                isSelected={location.pathname === ROUTES.CONTACT}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Contact
              </MenuButton>
            </Flex>
          </VStack>
          <Box>
            <AnimatePresence exitBeforeEnter>
              <Outlet />
            </AnimatePresence>
          </Box>
        </Grid>
        <Box h="32" /> {/* Add a box or spacer here as needed */}
        <Footer />
      </VStack>
    </Flex>
  );
};

export default AppLayout;

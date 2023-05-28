import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import AboutImage from 'src/Routes/About/AboutImage';
import JsonSection from 'src/Routes/About/JsonSection';
import Page from 'src/Routes/Page';

const About: React.FC = () => {
  return (
    <Page title="About">
      <VStack alignItems={{ base: 'center', lg: 'flex-start' }}>
        <Flex flexDir={{ base: 'column', lg: 'row' }} alignItems="center">
          <Box
            pr={{ base: 0, lg: 8 }}
            textAlign={{ base: 'center', lg: 'left' }}
            maxW={{ base: '75%', lg: '100%' }}
          >
            <Text fontSize={14}>
              Hello there! I&apos;m Jake, a seasoned professional software
              developer from Cleveland, Ohio.
            </Text>
            <Divider my={1} visibility="hidden" />
            <Text fontSize={14}>
              With almost a decade in the industry, I&apos;ve engineered
              software solutions for dozens of projects. Now I&apos;m delving
              into freelance, eager to offer my expertise to you! Big or small,
              your tech challenges are my next adventures.
            </Text>
          </Box>
          <AboutImage />
        </Flex>
        <JsonSection />
      </VStack>
    </Page>
  );
};

export default About;

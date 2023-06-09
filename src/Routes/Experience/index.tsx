import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import Page from 'src/Routes/Page';
import Professional from 'src/Routes/Experience/Professional';
import Personal from 'src/Routes/Experience/Personal';

const tabStyles = {
  _selected: { backgroundColor: 'primary.500', color: 'white' },
  _active: { backgroundColor: 'primary.500', color: 'white' },
  backgroundColor: 'gray.900',
  borderRadius: 2,
  flex: 1,
};

const Experience: React.FC = () => {
  return (
    <Page title="Experience">
      <VStack w="100%" mt={4}>
        <Tabs variant="soft-rounded" w="100%">
          <HStack justifyContent="center">
            <TabList w="100%" mx={{ base: 4, lg: 0 }} gap={2}>
              <Tab {...tabStyles}>Professional</Tab>
              <Tab {...tabStyles}>Personal</Tab>
            </TabList>
          </HStack>
          <TabPanels
            mt={2}
            overflowY={{ base: 'visible', lg: 'auto' }}
            h={{ base: 'auto', lg: 600 }} // TODO look into making this larger (taller)
            w="100%"
          >
            <TabPanel p={{ base: 4, lg: 0 }}>
              <Professional />
            </TabPanel>
            <TabPanel p={{ base: 4, lg: 0 }}>
              <Personal />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Page>
  );
};

export default Experience;

import {
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import Page from 'src/Routes/Page';
import ProfessionalCard from 'src/Routes/Experience/ProfessionalCard';

const tabStyles = {
  _selected: { backgroundColor: 'primary.500', color: 'white' },
  _active: { backgroundColor: 'primary.500', color: 'white' },
  borderRadius: 2,
  flex: 1,
};

const Experience: React.FC = () => {
  return (
    <Page title="Experience">
      <VStack w="100%">
        <Tabs variant="soft-rounded" w="100%">
          <HStack justifyContent="center">
            <TabList w="100%" mx={{ base: 4, lg: 0 }} gap={2}>
              <Tab {...tabStyles}>Professional</Tab>
              <Tab {...tabStyles}>Personal</Tab>
            </TabList>
          </HStack>
          <TabPanels
            overflowY={{ base: 'visible', lg: 'auto' }}
            h={{ base: 'auto', lg: 600 }}
            w="100%"
            py={2}
          >
            <TabPanel p={{ base: 4, lg: 0 }}>
              <VStack w="100%">
                <ProfessionalCard
                  {...{
                    logoPath: '/img/synapse-studios-logo.png',
                    companyName: 'Synapse Studios',
                    jobTitle: 'Senior Software Developer',
                    timeframeStart: 'Winter 2021',
                    timeframeEnd: 'Present',
                    linkHref: 'https://synapsestudios.com',
                    linkAriaLabel: 'Synapse Studios website link',
                    jobDescription:
                      'Synapse Studios is a software development agency based in Tempe, AZ. I work' +
                      ' full-time remote with a team of developers, product people,  and UI/UX' +
                      ' designers to develop software solutions for businesses.',
                  }}
                />
                <ProfessionalCard
                  {...{
                    logoPath: '/img/health-street-logo.png',
                    companyName: 'Health Street',
                    jobTitle: 'Software Developer',
                    timeframeStart: 'Winter 2019',
                    timeframeEnd: 'Winter 2021',
                    linkHref: 'https://health-street.net',
                    linkAriaLabel: 'Health Street website link',
                    jobDescription:
                      'Health Street is an intermediary that sets individuals and businesses up with ' +
                      'drug screening services, background checking, and more.  I optimized, ' +
                      'refactored, redesigned, and maintained large portions of the health-street.net website.',
                  }}
                />
                <ProfessionalCard
                  {...{
                    logoPath: '/img/publicis-sapient-logo.png',
                    companyName: 'Publicis Sapient',
                    jobTitle: 'Software Developer',
                    timeframeStart: '2015',
                    timeframeEnd: 'Winter 2019',
                    linkHref: 'https://www.publicissapient.com/',
                    linkAriaLabel: 'Publicis Sapient website link',
                    jobDescription:
                      'Publicis Sapient is an agency focused on providing software development services' +
                      ' to businesses.  I worked with clients such as Sherwin-Williams and Luxottica.',
                  }}
                />
              </VStack>
            </TabPanel>
            <TabPanel p={0}>
              <VStack alignItems="center">
                <VStack mt={8}>
                  <Image
                    color="dark.text"
                    brightness={255}
                    src="/img/bruce-almighty-jim-carrey.gif"
                    w="65%"
                    borderRadius={8}
                  />
                  <Text fontSize={24}>I&apos;m working on it!</Text>
                </VStack>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Page>
  );
};

export default Experience;

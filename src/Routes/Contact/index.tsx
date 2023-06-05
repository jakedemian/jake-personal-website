import React from 'react';
import { VStack } from '@chakra-ui/react';

import Page from 'src/Routes/Page';
import Email from 'src/Routes/Contact/Email';

const Contact: React.FC = () => {
  return (
    <Page title="Contact">
      <VStack alignItems={{ base: 'center', lg: 'flex-start' }}>
        <Email />
      </VStack>
    </Page>
  );
};

export default Contact;

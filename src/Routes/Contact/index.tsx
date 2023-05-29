import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import Page from 'src/Routes/Page';

const Contact: React.FC = () => {
  return (
    <Page title="Contact">
      <VStack alignItems={{ base: 'center', lg: 'flex-start' }}>
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
      </VStack>{' '}
    </Page>
  );
};

export default Contact;

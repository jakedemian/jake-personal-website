import React from 'react';
import { Text, VStack } from '@chakra-ui/layout';

const Page: React.FC<{ title: string }> = ({ title }) => {
  return (
    <VStack>
      <Text>{title}</Text>
    </VStack>
  );
};

export default Page;

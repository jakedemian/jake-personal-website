import React, { useMemo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const snappyOneLiners = [
  'All rights ignored. Go ahead and steal it.',
  'If you find a bug, submit a PR.',
  "If you're reading this: Why?",
  "I wasn't harmed (much) in making this website.",
  'Passed all unit tests. Well, except for one...',
  '; DROP TABLE users;--',
  'console.log("TODO delete me!!!");',
  '0 days since last production disaster.',
  'git push --force',
  'LGTM 🚀',
];

const Footer = () => {
  const oneLiner = useMemo(
    () => snappyOneLiners[Math.floor(Math.random() * snappyOneLiners.length)],
    []
  );

  return (
    <Flex flexDir="column" flex={1} justifyContent="flex-end">
      <Text fontSize={13} textAlign="center">
        &copy; {new Date().getFullYear()} Jake Demian
      </Text>
      <Text fontSize={11} mb={2} textAlign="center">
        {oneLiner}
      </Text>
    </Flex>
  );
};

export default Footer;

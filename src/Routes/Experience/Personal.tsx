import React from 'react';
import { VStack } from '@chakra-ui/react';

import PersonalCard from 'src/Routes/Experience/PersonalCard';
import TypedText from 'src/Menu/TypedText';

const Personal: React.FC = () => {
  return (
    <VStack w="100%" pr={{ base: 0, lg: 2 }}>
      <PersonalCard
        {...{
          logo: { component: <TypedText>Jake Demian</TypedText> },
          projectName: 'jakedemian.dev',
          shortDescription: 'The website you are perusing at this very moment!',
          linkHref: 'https://jakedemian.dev',
          linkAriaLabel: "jakedemian's personal website link",
        }}
      />
      <PersonalCard
        {...{
          logo: { path: '/img/blah.svg' },
          projectName: 'NutriVim',
          shortDescription:
            'Minimalist calorie counting app that prioritizes ease of use and simplicity.',
        }}
      />
    </VStack>
  );
};

export default Personal;

import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { GiBigDiamondRing } from 'react-icons/gi';
import { FaRegCircle } from 'react-icons/fa';

import PersonalCard from 'src/Routes/Experience/PersonalCard';
import TypedText from 'src/Menu/TypedText';

const Personal: React.FC = () => {
  return (
    <VStack w="100%" pr={{ base: 0, lg: 2 }}>
      <PersonalCard
        {...{
          logo: {
            component: (
              <TypedText fontSize={{ base: 16, lg: 24 }}>Jake Demian</TypedText>
            ),
          },
          projectName: 'jakedemian.dev',
          shortDescription: 'The website you are perusing at this very moment!',
          linkHref: 'https://jakedemian.dev',
          linkAriaLabel: "jakedemian's personal website link",
          githubLink: 'https://github.com/jakedemian/jake-personal-website',
          chips: [
            'React',
            'TypeScript',
            'Node.js',
            'Yarn',
            'Git',
            'Vercel',
            'Jest',
            'Chakra UI',
            'Redis',
          ],
        }}
      />
      <PersonalCard
        {...{
          projectName: 'NutriVim',
          logo: { path: '/img/nutrivim-logo.png' },

          shortDescription:
            'Minimalist calorie counting app that prioritizes ease of use and simplicity.',
          githubLink: 'https://github.com/jakedemian/nutri-vim',
          chips: [
            'Expo',
            'TypeScript',
            'React Native',
            'Yarn',
            'Git',
            'Xcode',
            'Android Studio',
          ],
        }}
      />
      <PersonalCard
        {...{
          projectName: 'Sapphire Lake',
          logo: { path: '/img/sapphire-lake-flat-logo.png' },
          shortDescription: '2D relaxing fishing game with pixel art graphics.',
          linkHref: 'https://prime-ape-games.itch.io/sapphire-lake',
          linkAriaLabel: 'Sapphire Lake web link',
          githubLink: 'https://github.com/jakedemian/sapphire-lake',
          chips: ['Unity', 'C#', '.NET', 'Aseprite', 'Git'],
        }}
      />
      <PersonalCard
        {...{
          projectName: 'racepace',
          logo: { path: '/img/racepace-logo.png' },
          shortDescription: 'Simple running time conversion tool.',
          linkHref: 'https://jakedemian.github.io/racepace/',
          linkAriaLabel: 'race pace web link',
          githubLink: 'https://github.com/jakedemian/racepace',
          chips: ['React', 'JavaScript', 'npm', 'Git'],
        }}
      />
      <PersonalCard
        {...{
          projectName: 'My Wedding Site',
          logo: {
            component: (
              <Box>
                <Box display="inline-block">
                  <GiBigDiamondRing size={48} />
                </Box>
                <Box display="inline-block" mb={0.5} ml={-5}>
                  <FaRegCircle size={38} />
                </Box>
              </Box>
            ),
          },
          shortDescription:
            'A website for RSVPing, registry links, and live-stream details for my wedding.',
          linkHref: 'https://aliandjake2020.com',
          linkAriaLabel: 'wedding website link',
          githubLink:
            'https://github.com/aliandjake2020/aliandjake2020.github.io',
          chips: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
        }}
      />
    </VStack>
  );
};

export default Personal;

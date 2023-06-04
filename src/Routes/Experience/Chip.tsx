import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import * as Icons from 'react-icons/si';
import { IconType } from 'react-icons';

import { useIsDark } from 'src/hooks/useIsDark';

const ChipIconMap = {
  React: Icons.SiReact,
  TypeScript: Icons.SiTypescript,
  'Node.js': Icons.SiNodedotjs,
  Yarn: Icons.SiYarn,
  Git: Icons.SiGit,
  Vercel: Icons.SiVercel,
  Jest: Icons.SiJest,
};

type ChipProps = {
  name: string;
};

const Chip: React.FC<ChipProps> = ({ name }) => {
  const Icon: IconType = ChipIconMap[name as keyof typeof ChipIconMap];
  const { isDark } = useIsDark();

  return (
    <HStack
      bgColor={isDark ? 'background' : '#eee'}
      // _hover={{
      //   bgColor: 'primary.500',
      //   color: 'white',
      //   cursor: 'pointer',
      //   userSelect: 'none',
      // }}
      userSelect="none"
      py={2}
      px={4}
      borderRadius={999}
      alignItems="center"
    >
      <Icon />
      <Text>{name}</Text>
    </HStack>
  );
};

export default Chip;

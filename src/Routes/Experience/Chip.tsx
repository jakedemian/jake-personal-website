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
  size?: number;
};

const Chip: React.FC<ChipProps> = ({ name, size = 14 }) => {
  const Icon: IconType = ChipIconMap[name as keyof typeof ChipIconMap];
  const { isDark } = useIsDark();

  return (
    <HStack
      bgColor={isDark ? 'background' : '#eee'}
      userSelect="none"
      py={1}
      px={3}
      borderRadius={999}
      alignItems="center"
    >
      <Icon size={size} />
      <Text fontSize={size}>{name}</Text>
    </HStack>
  );
};

export default Chip;

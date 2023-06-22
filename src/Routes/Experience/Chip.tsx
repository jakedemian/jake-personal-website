import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { useIsDark } from 'src/hooks/useIsDark';
import { ChipIconMap } from 'src/Routes/Experience/ChipIconMap';

type ChipProps = {
  name: string;
  size?: number;
};

export const Chip: React.FC<ChipProps> = ({ name, size = 14 }) => {
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

import React from 'react';
import { HStack, Text, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { useIsDark } from 'src/hooks/useIsDark';
import { ChipIconMap } from 'src/Routes/Experience/ChipIconMap';
import { IconAs } from 'src/common/types/icon';

type ChipProps = {
  name: string;
  size?: number;
};

export const Chip: React.FC<ChipProps> = ({ name, size = 14 }) => {
  const IconComponent: IconType = ChipIconMap[name as keyof typeof ChipIconMap];
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
      <Icon as={IconComponent as IconAs} size={size} />
      <Text fontSize={size}>{name}</Text>
    </HStack>
  );
};

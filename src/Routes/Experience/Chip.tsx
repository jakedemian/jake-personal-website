import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import * as Icons from 'react-icons/si';
import { IconType } from 'react-icons';

import { useIsDark } from 'src/hooks/useIsDark';

export const ChipIconMap = {
  React: Icons.SiReact,
  TypeScript: Icons.SiTypescript,
  'Node.js': Icons.SiNodedotjs,
  Yarn: Icons.SiYarn,
  Git: Icons.SiGit,
  Vercel: Icons.SiVercel,
  Jest: Icons.SiJest,
  Expo: Icons.SiExpo,
  'React Native': Icons.SiReact,
  Xcode: Icons.SiXcode,
  'Android Studio': Icons.SiAndroidstudio,
  'Chakra UI': Icons.SiChakraui,
  Unity: Icons.SiUnity,
  '.NET': Icons.SiDotnet,
  Aseprite: Icons.SiAseprite,
  npm: Icons.SiNpm,
  JavaScript: Icons.SiJavascript,
  'C#': Icons.SiCsharp,
  HTML5: Icons.SiHtml5,
  CSS3: Icons.SiCss3,
  Redis: Icons.SiRedis,
};

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

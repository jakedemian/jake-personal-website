import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/react';

import { useIsMobile } from 'src/hooks/useIsMobile';

type MenuButtonProps = React.PropsWithChildren<ButtonProps>;

const MenuButton: React.FC<MenuButtonProps & { isSelected?: boolean }> = ({
  children,
  isSelected,
  ...props
}) => {
  const colorModeData = useColorMode();
  const colorMode = colorModeData.colorMode;
  const desktopUnselectedHoverColor =
    colorMode === 'dark' ? 'gray.800' : 'gray.200';
  const isMobile = useIsMobile();

  return (
    <Button
      px={2}
      size="sm"
      w={{ base: 'auto', lg: '100%' }}
      color={isSelected ? 'white' : 'default'}
      bgColor={isSelected ? 'primary.500' : 'transparent'}
      borderRadius={2}
      _hover={{
        bgColor:
          isMobile || isSelected ? 'primary.500' : desktopUnselectedHoverColor,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MenuButton;

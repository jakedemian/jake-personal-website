import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/button';
import { isMobile } from 'react-device-detect';

type MenuButtonProps = React.PropsWithChildren<ButtonProps>;

const MenuButton: React.FC<MenuButtonProps & { isSelected?: boolean }> = ({
  children,
  isSelected,
  ...props
}) => {
  return (
    <Button
      px={2}
      size="sm"
      w={{ base: 'auto', lg: '100%' }}
      bgColor={isSelected ? 'primary.500' : 'transparent'}
      _hover={{
        bgColor: isMobile || isSelected ? 'primary.500' : 'primary.800',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MenuButton;

import { Button } from '@chakra-ui/button';
import React from 'react';

const MenuButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Button w={{ base: 'auto', lg: '100%' }}>{children}</Button>;
};

export default MenuButton;

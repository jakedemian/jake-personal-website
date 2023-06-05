import { Box, Text } from '@chakra-ui/layout';
import { ResponsiveValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Cursor: React.FC<{ isShown: boolean }> = ({ isShown }) => (
  <Box as="span" color={isShown ? 'primary.500' : 'transparent'}>
    _
  </Box>
);

type TypedTextProps = {
  children: string;
  fontSize?: number | ResponsiveValue<number>;
};

const TypedText: React.FC<TypedTextProps> = ({ children, fontSize = 24 }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [cursorShown, setCursorShown] = useState(true);
  const endText: string = children;

  useEffect(() => {
    if (currentText === endText) {
      return;
    }

    setTimeout(() => {
      if (currentText.length < endText.length) {
        setCurrentText(prevText => endText.substring(0, prevText.length + 1));
      }
    }, 200);
  }, [currentText]);

  useEffect(() => {
    if (currentText !== endText) {
      return;
    }

    setTimeout(() => {
      setCursorShown(prevCursorShown => !prevCursorShown);
    }, 500);
  }, [currentText, cursorShown]);
  return (
    <>
      <Text fontWeight={600} fontSize={fontSize}>
        {currentText}
        <Cursor isShown={cursorShown} />
      </Text>
    </>
  );
};

export default TypedText;

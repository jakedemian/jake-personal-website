import { Box, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

const Cursor: React.FC<{ isShown: boolean }> = ({ isShown }) => (
  <Box as="span" color={isShown ? 'current' : 'transparent'}>
    _
  </Box>
);

const TypedText: React.FC<{ children: string }> = ({ children }) => {
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
      <Text>
        {currentText}
        <Cursor isShown={cursorShown} />
      </Text>
    </>
  );
};

export default TypedText;

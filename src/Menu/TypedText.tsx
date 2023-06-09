import { Box, Heading, HStack, Text } from '@chakra-ui/layout';
import { ResponsiveValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Cursor: React.FC<{
  isShown: boolean;
  fontSize: number | ResponsiveValue<number>;
}> = ({ isShown, fontSize }) => (
  <Box
    as="span"
    color={isShown ? 'primary.500' : 'transparent'}
    fontSize={fontSize}
    fontWeight={600}
  >
    _
  </Box>
);

type TypedTextProps = {
  children: string;
  fontSize?: number | ResponsiveValue<number>;
  isH1?: boolean;
};

const TypedText: React.FC<TypedTextProps> = ({
  children,
  fontSize = 24,
  isH1,
}) => {
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
    }, 100);
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
      {isH1 ? (
        <HStack gap={0}>
          <Heading
            aria-label="Jake Demian"
            as="h1"
            fontWeight={600}
            fontSize={fontSize}
            data-testid="jake-demian"
            fontFamily="Montserrat"
            whiteSpace="nowrap"
          >
            {currentText}
          </Heading>
          <Cursor isShown={cursorShown} fontSize={fontSize} />
        </HStack>
      ) : (
        <Text fontWeight={600} fontSize={fontSize} data-testid="typed-text">
          {currentText}
          <Cursor isShown={cursorShown} fontSize={fontSize} />
        </Text>
      )}
    </>
  );
};

export default TypedText;

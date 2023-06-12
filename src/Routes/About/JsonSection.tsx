import React, { useContext, useEffect, useState } from 'react';
import { Box, HStack, useTheme } from '@chakra-ui/react';
import { desaturate } from 'polished';

import { ClickCountContext } from 'src/context/ClickCountContext';
import { useIsDark } from 'src/hooks/useIsDark';

const BORN_DATE_TIME = new Date(1991, 11, 9, 0, 6, 0, 0);
const getExactAge = () => {
  const nowDate = new Date();
  return (
    (nowDate.getTime() - BORN_DATE_TIME.getTime()) / 1000 / 60 / 60 / 24 / 365
  );
};

const AgeDisplay: React.FC = () => {
  const [exactAge, setExactAge] = useState<number>(getExactAge());

  useEffect(() => {
    setInterval(() => {
      setExactAge(getExactAge());
    }, 50);
  }, []);

  return <pre>{`  "age": "${exactAge.toFixed(10)}",`}</pre>;
};

const FlashingCursor: React.FC = () => {
  const [cursorShown, setCursorShown] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorShown(prevCursorShown => !prevCursorShown);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{cursorShown ? '}█' : '} '}</>;
};

const JsonSection: React.FC = () => {
  const { colors } = useTheme();
  const { clickCount } = useContext(ClickCountContext);
  const { isDark } = useIsDark();

  return (
    <Box
      lineHeight={1.3}
      bg={isDark ? desaturate(0.3, colors.primary[900]) : colors.primary[900]}
      w={{ base: '90%', lg: '100%' }}
      borderRadius={4}
      mt={4}
      mb={{ base: 8, lg: 0 }}
      overflow="hidden"
    >
      <HStack
        w="100%"
        h={6}
        alignItems="center"
        pl={4}
        bg={
          isDark
            ? desaturate(0.8, colors.primary[300])
            : desaturate(0.6, colors.primary[100])
        }
      >
        {/* Think about changing these depending on detected OS */}
        <Box
          w={3}
          h={3}
          bg="red.500"
          borderRadius={'50%'}
          borderWidth={1}
          borderColor="gray.500"
          borderStyle="solid"
        />
        <Box
          w={3}
          h={3}
          bg="yellow.400"
          borderRadius={'50%'}
          borderWidth={1}
          borderColor="gray.500"
          borderStyle="solid"
        />
        <Box
          w={3}
          h={3}
          bg="green.300"
          borderRadius={'50%'}
          borderWidth={1}
          borderColor="gray.500"
          borderStyle="solid"
        />
      </HStack>
      <Box ml={8} mb={6} fontSize={{ base: 13, lg: 14 }} color="white" pt={4}>
        <pre>
          <span
            style={{
              fontFamily: 'Source Code Pro',
              color: isDark ? colors.primary[300] : colors.primary[100],
            }}
          >
            {'jaked '}
          </span>
          <span
            style={{
              fontFamily: 'Source Code Pro',
              fontWeight: 700,
              color: colors.yellow[500],
            }}
          >
            {'~'}
          </span>
          <span
            style={{
              fontFamily: 'Source Code Pro',
              color: isDark ? colors.primary[300] : colors.primary[100],
            }}
          >
            {' $ '}
          </span>
          <span style={{ fontFamily: 'Source Code Pro' }}>
            {'sudo ./info.sh --name=jake'}
          </span>
        </pre>
        <pre style={{ fontFamily: 'Source Code Pro' }}>
          {`{
  "name": "Jacob Demian",
`}

          <AgeDisplay />

          {`  "occupation": "Software Developer",
  "children": 1,
  "pets": {
    "cats": [
      "frank",
      "randy"
    ]
  },
  "clickCount": ${clickCount === null ? 'Loading...' : clickCount},
  "otherInterests": [
    "game design",
    "running",
    "space! 🚀",
    "playing video games"
  ],
  "numOfTimesWatchedSuperbad": 38,
`}
          {`  "approxNumOfSandwichesEaten": ${Math.floor(getExactAge() * 365)}
`}
          <FlashingCursor />
        </pre>
      </Box>
    </Box>
  );
};

export default JsonSection;

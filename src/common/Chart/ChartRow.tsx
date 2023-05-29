import { Box, GridItem, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const ChartRow: React.FC<{
  label: string;
  value?: number;
  isGroupLabel?: boolean;
}> = ({ label, value, isGroupLabel }) => {
  const ROW_HEIGHT = 5;
  const TRANSITION_TIME = 0.5;
  const [barWidth, setBarWidth] = useState<number>(0);

  useEffect(() => {
    if (!value) return;

    setBarWidth(value);
  }, [value]);

  return (
    <GridItem>
      <HStack h={ROW_HEIGHT}>
        <Box w="25%" textAlign="right" pr={2} mr={-2}>
          <Text
            fontWeight={isGroupLabel ? 700 : 400}
            fontSize={{ base: 9, lg: 15 }}
          >
            {label}
          </Text>
        </Box>
        <Box flex={1}>
          {value && (
            <Box
              transition={`width ${TRANSITION_TIME}s`}
              bgColor="primary.500"
              w={`${barWidth}%`}
              h={ROW_HEIGHT}
            />
          )}
        </Box>
      </HStack>
    </GridItem>
  );
};

export default ChartRow;

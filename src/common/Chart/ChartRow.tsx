import { Box, GridItem, HStack, Text } from '@chakra-ui/react';
import React, { HTMLAttributes, useEffect, useState } from 'react';

interface ChartRowProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  value?: number;
  isGroupLabel?: boolean;
  blank?: boolean;
  animationDelay?: number;
}
const ChartRow: React.FC<ChartRowProps> = ({
  label,
  value,
  isGroupLabel,
  blank,
  animationDelay,
  ...restProps
}) => {
  const ROW_HEIGHT = { base: 3, lg: 3.5 };
  const TRANSITION_TIME = 0.25;
  const [barWidth, setBarWidth] = useState<number>(0);

  useEffect(() => {
    if (!value) return;

    setTimeout(() => setBarWidth(value), animationDelay || 0);
  }, [value]);

  return (
    <GridItem h={ROW_HEIGHT} mb={isGroupLabel ? 2 : 0} {...restProps}>
      {!blank && (
        <HStack>
          <Box w="20%" textAlign="right" pr={2} mr={-2}>
            <Text
              style={{ direction: 'rtl' }}
              whiteSpace="nowrap"
              fontWeight={isGroupLabel ? 700 : 400}
              fontSize={
                isGroupLabel ? { base: 11, lg: 18 } : { base: 10, lg: 15 }
              }
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
      )}
    </GridItem>
  );
};

export default ChartRow;

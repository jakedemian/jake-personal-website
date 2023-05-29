import { Box, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Row: React.FC<{
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
    <GridItem w="100%">
      <HStack h={ROW_HEIGHT}>
        <Box w="25%" textAlign="right">
          <Text fontWeight={isGroupLabel ? 700 : 400}>{label}</Text>
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

const Chart: React.FC = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={1}>
      <Row label="Languages" isGroupLabel />
      <Row label="TypeScript" value={90} />
      <Row label="Java" value={30} />
      <Row label="Python" value={50} />
    </Grid>
  );
};

export default Chart;

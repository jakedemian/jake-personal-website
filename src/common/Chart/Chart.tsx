import { Box, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
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

const commonBorderProps = {
  borderColor: 'blue.200',
  borderStyle: 'solid',
};

const axisLabelTransform = 'rotate(-45deg) translate(20px, -50px)';

const Chart: React.FC = () => {
  return (
    <Box position="relative">
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
        <Row label="Languages" isGroupLabel />
        <Row label="TypeScript" value={90} />
        <Row label="Java" value={30} />
        <Row label="Python" value={50} />
      </Grid>
      <Grid
        templateColumns="25% 75%"
        w="100%"
        h="100%"
        gap={2}
        position="absolute"
        top={0}
        left={0}
      >
        <Box h={5} />
        <Grid zIndex={-1} flex={1} templateColumns="50% 50%">
          <Box
            {...commonBorderProps}
            borderLeftWidth={1}
            mb={-2}
            position="relative"
          />
          <Box
            {...commonBorderProps}
            borderLeftWidth={1}
            borderRightWidth={1}
            mb={-2}
            position="relative"
          />
        </Grid>
      </Grid>
      <Grid
        position="absolute"
        top={0}
        left={0}
        templateColumns="25% 75%"
        w={'100%'}
      >
        <Box />
        <Grid templateColumns="50% 50% 50%" transform="translateY(-50px)">
          <Box>
            <Text
              fontSize={13}
              transform={axisLabelTransform}
              alignSelf={'left'}
            >
              Never used
            </Text>
          </Box>
          <Box>
            <Text fontSize={13} transform={axisLabelTransform}>
              Familiar
            </Text>
          </Box>
          <Box>
            <Text fontSize={13} transform={axisLabelTransform}>
              Experienced
            </Text>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chart;

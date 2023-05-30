import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';

const ChartAxisLabels: React.FC = () => {
  const axisLabelTransform = 'rotate(-25deg) translate(0px, -20px)';
  const axisLabelTransformMobile = 'rotate(-25deg) translate(-20px, 0px)';

  return (
    <Grid
      position="absolute"
      top={0}
      left={0}
      templateColumns="20% 80%"
      w={'100%'}
    >
      <Box />
      <Grid templateColumns="50% 50% 50%" transform="translateY(-50px)">
        <Box>
          <Text
            fontSize={{ base: 10, lg: 13 }}
            transform={{
              base: axisLabelTransformMobile,
              lg: axisLabelTransform,
            }}
          >
            Acquainted
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ base: 10, lg: 13 }}
            transform={{
              base: axisLabelTransformMobile,
              lg: axisLabelTransform,
            }}
          >
            Knowledgeable
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ base: 10, lg: 13 }}
            transform={{
              base: axisLabelTransformMobile,
              lg: axisLabelTransform,
            }}
          >
            Proficient
          </Text>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChartAxisLabels;

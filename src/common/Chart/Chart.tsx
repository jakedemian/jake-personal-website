import React from 'react';
import { Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';

import { useIsDark } from 'src/hooks/useIsDark';
import ChartRow from 'src/common/Chart/ChartRow';

const Chart: React.FC = () => {
  const { isDark } = useIsDark();
  const commonBorderProps = {
    borderColor: isDark ? 'primary.800' : 'primary.100',
    borderStyle: 'solid',
  };

  const axisLabelTransform = 'rotate(-25deg) translate(0px, -20px)';
  const axisLabelTransformMobile = 'rotate(-25deg) translate(-20px, 0px)';
  const dynamicWidth = { base: '75%', lg: '100%' };

  return (
    <HStack mt={16} justifyContent={{ base: 'center', lg: 'flex-start' }}>
      <VStack position="relative" w={dynamicWidth} ml={{ base: -10, lg: 0 }}>
        <Grid templateColumns="repeat(1, 1fr)" gap={1} w={'100%'}>
          <ChartRow label="Languages" isGroupLabel />
          <ChartRow label="TypeScript" value={100} />
          <ChartRow label="C#" value={75} />
          <ChartRow label="Java" value={50} />
          <ChartRow label="Python" value={30} />
          <ChartRow blank />
          {/*  */}
          <ChartRow isGroupLabel label="Frameworks" />
          <ChartRow label="React" value={100} />
          <ChartRow blank />
          {/*  */}
          <ChartRow isGroupLabel label="Mobile" />
          <ChartRow label="React Native" value={90} />
          <ChartRow label="Ionic" value={90} />
          <ChartRow blank />
          {/*  */}
          <ChartRow isGroupLabel label="Data" />
          <ChartRow label="PostgreSQL" value={90} />
          <ChartRow label="Redis" value={90} />
          <ChartRow label="GraphQL" value={90} />
          <ChartRow blank />
          {/*  */}
          <ChartRow isGroupLabel label="Cloud" />
          <ChartRow label="AWS" value={80} />
          <ChartRow label="GCP" value={80} />
          <ChartRow label="Azure" value={50} />
        </Grid>
        <Grid
          templateColumns="25% 75%"
          w={'100%'}
          h="100%"
          position="absolute"
          top={0}
          left={0}
        >
          <Box h={5} pr={2} />
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
      </VStack>
    </HStack>
  );
};

export default Chart;

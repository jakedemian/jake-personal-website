import React from 'react';
import { Grid, HStack, VStack } from '@chakra-ui/react';

import ChartRow from 'src/common/Chart/ChartRow';
import ChartAxisLabels from 'src/common/Chart/ChartAxisLabels';
import ChartAxisLines from 'src/common/Chart/ChartAxisLines';
import { data } from 'src/common/Chart/data';

const Chart: React.FC = () => {
  const DELAY_MILLISECONDS = 35;
  const calculateDelay = (groupIndex: number, itemIndex: number): number => {
    let totalIndex = 0;
    for (let i = 0; i < groupIndex; i++) {
      totalIndex += Object.keys(data[i].items).length; // Only count the actual items
    }
    totalIndex += itemIndex;
    return totalIndex * DELAY_MILLISECONDS;
  };

  return (
    <HStack mt={16} justifyContent={{ base: 'center', lg: 'flex-start' }}>
      <VStack
        position="relative"
        w={{ base: '75%', lg: '100%' }}
        ml={{ base: -10, lg: 0 }}
      >
        <Grid templateColumns="repeat(1, 1fr)" gap={1} w={'100%'}>
          <ChartRow blank />
          {data.map((group, groupIndex) => (
            <>
              <ChartRow
                label={group.category}
                isGroupLabel
                key={group.category}
              />
              {Object.keys(group.items).map((item, itemIndex) => (
                <ChartRow
                  key={item}
                  label={item}
                  value={group.items[item]}
                  animationDelay={calculateDelay(groupIndex, itemIndex)}
                />
              ))}
              {groupIndex !== data.length - 1 && <ChartRow blank />}
            </>
          ))}
        </Grid>
        <ChartAxisLines />
        <ChartAxisLabels />
      </VStack>
    </HStack>
  );
};

export default Chart;

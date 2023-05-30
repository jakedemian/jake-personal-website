import React from 'react';
import { Grid, HStack, VStack } from '@chakra-ui/react';

import ChartRow from 'src/common/Chart/ChartRow';
import ChartAxisLabels from 'src/common/Chart/ChartAxisLabels';
import ChartAxisLines from 'src/common/Chart/ChartAxisLines';
import { data } from 'src/common/Chart/data';

const Chart: React.FC = () => {
  return (
    <HStack mt={16} justifyContent={{ base: 'center', lg: 'flex-start' }}>
      <VStack
        position="relative"
        w={{ base: '75%', lg: '100%' }}
        ml={{ base: -10, lg: 0 }}
      >
        <Grid templateColumns="repeat(1, 1fr)" gap={1} w={'100%'}>
          {data.map((group, index) => (
            <>
              <ChartRow label={group.category} isGroupLabel />
              {Object.keys(group.items).map(item => (
                <ChartRow key={item} label={item} value={group.items[item]} />
              ))}
              {index !== data.length - 1 && <ChartRow blank />}
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

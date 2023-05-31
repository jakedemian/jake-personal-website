import React from 'react';
import { Grid, HStack, Text, VStack } from '@chakra-ui/react';

import ChartRow from 'src/common/Chart/ChartRow';
import ChartAxisLabels from 'src/common/Chart/ChartAxisLabels';
import ChartAxisLines from 'src/common/Chart/ChartAxisLines';
import { data } from 'src/common/Chart/data';
import { useIsDark } from 'src/hooks/useIsDark';

const COLORED_ICONS_ENABLED = false; // TODO make an env var

const Chart: React.FC = () => {
  const { isLight } = useIsDark();
  const DELAY_MILLISECONDS = 40;
  const calculateDelay = (groupIndex: number, itemIndex: number): number => {
    let totalIndex = 0;
    for (let i = 0; i < groupIndex; i++) {
      totalIndex += Object.keys(data[i].items).length; // Only count the actual items
    }
    totalIndex += itemIndex;
    return totalIndex * DELAY_MILLISECONDS;
  };

  return (
    <HStack justifyContent={{ base: 'center', lg: 'flex-start' }}>
      <VStack w="100%" ml={{ base: -10, lg: 0 }}>
        <VStack position="relative" w={{ base: '75%', lg: '100%' }}>
          <Grid templateColumns="repeat(1, 1fr)" gap={1} w={'100%'}>
            <ChartRow blank />

            {data.map((group, groupIndex) => (
              <React.Fragment key={group.category}>
                <ChartRow
                  data-testid="group-label"
                  label={group.category}
                  isGroupLabel
                />

                {Object.keys(group.items)
                  .sort((a, b) => group.items[b].value - group.items[a].value)
                  .map((item, itemIndex) => {
                    const Icon = group.items[item].icon;
                    const lightStyles =
                      isLight && COLORED_ICONS_ENABLED
                        ? {
                            backgroundColor: group.items[item]?.lightBgColor,
                            color: group.items[item]?.lightColor,
                          }
                        : {};

                    return (
                      <ChartRow
                        key={item}
                        label={item}
                        value={group.items[item].value}
                        animationDelay={calculateDelay(groupIndex, itemIndex)}
                        data-testid="chart-row"
                        icon={
                          <Icon
                            size={14}
                            color={
                              COLORED_ICONS_ENABLED
                                ? group.items[item].color
                                : 'text'
                            }
                            style={{ minWidth: '14px', ...lightStyles }}
                          />
                        }
                      />
                    );
                  })}
                {groupIndex !== data.length - 1 && (
                  <ChartRow blank data-testid="blank-row" />
                )}
              </React.Fragment>
            ))}
          </Grid>
          <ChartAxisLines />
          <ChartAxisLabels />
        </VStack>
        <HStack justifyContent="flex-start" width="80%">
          <Text mt={8} fontSize={12}>
            * Actively learning this
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Chart;

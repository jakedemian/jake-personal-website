import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';

import Page from 'src/Routes/Page';
import Chart from 'src/common/Chart/Chart';

const Skillset: React.FC = () => {
  return (
    <Page title="Skillset">
      <Chart />
    </Page>
  );
};

export default Skillset;

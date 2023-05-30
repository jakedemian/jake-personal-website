import { Box } from '@chakra-ui/react';
import React from 'react';

import Page from 'src/Routes/Page';
import Chart from 'src/common/Chart';

const Skillset: React.FC = () => {
  return (
    <Page title="Skillset">
      <Box mt={16}>
        <Chart />
      </Box>
    </Page>
  );
};

export default Skillset;

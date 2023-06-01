import React from 'react';
import {
  Box,
  Card,
  Grid,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { useIsDark } from 'src/hooks/useIsDark';

type ProfessionalCardProps = {
  logoPath: string;
  companyName: string;
  jobTitle: string;
  timeframeStart: string;
  timeframeEnd: string;
  linkHref: string;
  linkAriaLabel: string;
  jobDescription: string;
};

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  logoPath,
  companyName,
  jobTitle,
  timeframeStart,
  timeframeEnd,
  linkHref,
  linkAriaLabel,
  jobDescription,
  /*
  TODO
  githubLink: string
  githubAriaLabel: string
  techChips: string[] or custom type
  */
}) => {
  const { isDark } = useIsDark();

  // TODO for mobile, the logo and content should be vertically stacked

  return (
    <Card width="100%" p={4} bgColor={isDark ? 'primary.700' : 'white'}>
      <Grid templateColumns={{ base: '40% 60%', lg: '40% 60%' }}>
        <VStack alignItems="center" justifyContent="center">
          <Image
            w="75%"
            filter={isDark ? 'brightness(999%)' : 'brightness(0%)'}
            src={logoPath}
          />
        </VStack>
        <VStack alignItems="flex-start" gap={4}>
          <HStack justifyContent="space-between" w="100%">
            <Box>
              <Text fontSize={20} fontWeight={700} lineHeight={1.2}>
                {companyName}
              </Text>
              <Text fontSize={13} lineHeight={1.2} fontStyle="italic">
                {jobTitle}
              </Text>
              <Text fontSize={13} lineHeight={1.2} fontStyle="italic">
                {`${timeframeStart} - ${timeframeEnd}`}
              </Text>
            </Box>
            <Box>
              <IconButton
                size={'sm'}
                as={Link}
                aria-label={linkAriaLabel}
                href={linkHref}
                target="_blank"
                bgColor={isDark ? 'white' : 'primary.500'}
                color={isDark ? 'primary.500' : 'white'}
                icon={<ExternalLinkIcon />}
              />
            </Box>
          </HStack>

          <Box>
            <Text fontSize={14}>{jobDescription}</Text>
          </Box>
        </VStack>
      </Grid>
    </Card>
  );
};

export default ProfessionalCard;

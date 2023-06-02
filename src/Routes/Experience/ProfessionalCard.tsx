import React from 'react';
import {
  Box,
  Card,
  Flex,
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

  return (
    <Card width="100%" p={4} bgColor={isDark ? 'primary.700' : 'white'}>
      <Flex flexDir={{ base: 'column', lg: 'row' }} gap={4}>
        <VStack alignItems="flex-start" gap={4}>
          <HStack
            justifyContent={{ base: 'space-between', lg: 'flex-start' }}
            w="100%"
            position="relative"
            gap={{ base: 0, lg: 8 }}
          >
            <Box whiteSpace="nowrap" w={{ base: 'auto', lg: '35%' }}>
              <Text fontSize={20} fontWeight={700} lineHeight={1.2}>
                {companyName}
                <IconButton
                  size={'sm'}
                  as={Link}
                  aria-label={linkAriaLabel}
                  href={linkHref}
                  variant="ghost"
                  target="_blank"
                  color={isDark ? 'white' : 'primary.500'}
                  icon={<ExternalLinkIcon />}
                  ml={1}
                  mt={-1}
                />
              </Text>
              <Text fontSize={13} lineHeight={1.2} fontStyle="italic">
                {jobTitle}
              </Text>
              <Text fontSize={13} lineHeight={1.2} fontStyle="italic">
                {`${timeframeStart} - ${timeframeEnd}`}
              </Text>
            </Box>
            <HStack
              maxW={200}
              justifyContent={{ base: 'flex-end', lg: 'flex-start' }}
            >
              <Image
                filter={isDark ? 'brightness(999%)' : 'brightness(0%)'}
                src={logoPath}
                maxW="70%"
                maxH={65}
              />
            </HStack>
          </HStack>
          <Box>
            <Text fontSize={14}>{jobDescription}</Text>
          </Box>
        </VStack>
      </Flex>
    </Card>
  );
};

export default ProfessionalCard;

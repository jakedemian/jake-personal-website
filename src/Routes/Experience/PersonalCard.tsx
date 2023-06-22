import React from 'react';
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { useIsDark } from 'src/hooks/useIsDark';
import { Chip } from 'src/Routes/Experience/Chip';
import { NonEmptyArray } from 'src/common/types';
import { ChipIconMap } from 'src/Routes/Experience/ChipIconMap';

interface PathLogo {
  path: string;
  component?: undefined;
}

interface ComponentLogo {
  component: React.ReactNode;
  path?: undefined;
}

type PersonalCardProps = {
  logo?: PathLogo | ComponentLogo;
  projectName: string;
  shortDescription: string;
  linkHref?: string;
  linkAriaLabel?: string;
  chips: NonEmptyArray<keyof typeof ChipIconMap>;
  githubLink: string;
};

const PersonalCard: React.FC<PersonalCardProps> = ({
  logo,
  projectName,
  shortDescription,
  linkHref,
  linkAriaLabel,
  chips,
  githubLink,
}) => {
  const { isDark } = useIsDark();

  return (
    <Card
      width="100%"
      bgColor={isDark ? '#202020' : 'white'}
      borderRadius={2}
      overflow={'hidden'}
    >
      <Box h={2} w="100%" bgColor={'primary.500'} />
      <Flex flexDir={{ base: 'column', lg: 'row' }} gap={4} p={4}>
        <VStack alignItems="flex-start" gap={4} w="100%">
          <HStack
            justifyContent="space-between"
            alignItems={{ base: 'center', lg: 'flex-start' }}
            w="100%"
            gap={{ base: 0, lg: 8 }}
          >
            <Box whiteSpace="nowrap" w={{ base: '50%', lg: '45%' }}>
              <Text
                fontSize={projectName.length > 16 ? 16 : 20}
                fontWeight={700}
                lineHeight={1.2}
              >
                {projectName}
                {linkHref && linkAriaLabel && (
                  <IconButton
                    size={'sm'}
                    as={Link}
                    aria-label={linkAriaLabel}
                    href={linkHref}
                    variant="ghost"
                    target="_blank"
                    color="primary.500"
                    icon={<ExternalLinkIcon />}
                    ml={1}
                    mt={-1}
                  />
                )}
              </Text>
              <Text
                fontSize={13}
                lineHeight={1.2}
                fontStyle="italic"
                whiteSpace="pre-wrap"
              >
                {shortDescription}
              </Text>
            </Box>
            <HStack justifyContent="flex-end">
              {logo?.path && (
                <Image
                  src={logo.path}
                  maxW={{ base: 120, lg: 160 }}
                  maxH={65}
                  filter={isDark ? 'brightness(9999%)' : 'brightness(0%)'}
                />
              )}
              {logo?.component && <Box>{logo.component}</Box>}
            </HStack>
          </HStack>
          <VStack alignItems="flex-start" w="100%">
            <Text ml={1} fontWeight={700}>
              Built Using
            </Text>
            <Grid templateColumns={{ base: '1fr', lg: '75% 25%' }} width="100%">
              <Wrap>
                {chips.map(chipName => (
                  <Chip name={chipName} key={chipName} />
                ))}
              </Wrap>
              <VStack justifyContent="flex-end" alignItems="flex-end">
                {/* TODO make this a new component? ExternalLink */}
                <Button
                  as={Link}
                  href={githubLink}
                  variant="link"
                  color="primary.500"
                  rightIcon={<ExternalLinkIcon />}
                  target="_blank"
                  mt={4}
                >
                  GitHub
                </Button>
              </VStack>
            </Grid>
          </VStack>
        </VStack>
      </Flex>
    </Card>
  );
};

export default PersonalCard;

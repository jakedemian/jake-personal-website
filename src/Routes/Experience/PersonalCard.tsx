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
import Chip from 'src/Routes/Experience/Chip';

interface PathLogo {
  path: string;
  component?: undefined;
}

interface ComponentLogo {
  component: React.ReactNode;
  path?: undefined;
}

type PersonalCardProps = {
  logo: PathLogo | ComponentLogo;
  projectName: string;
  shortDescription: string;
  linkHref: string;
  linkAriaLabel: string;
};

const PersonalCard: React.FC<PersonalCardProps> = ({
  logo,
  projectName,
  shortDescription,
  linkHref,
  linkAriaLabel,
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
        <VStack alignItems="flex-start" gap={4}>
          <HStack
            justifyContent={{ base: 'space-between', lg: 'flex-start' }}
            w="100%"
            position="relative"
            gap={{ base: 0, lg: 8 }}
          >
            <Box whiteSpace="nowrap" w={{ base: 'auto', lg: '45%' }}>
              <Text fontSize={20} fontWeight={700} lineHeight={1.2}>
                {projectName}
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
            <HStack flex={1} justifyContent="flex-end" pr={4}>
              {logo.path && (
                <Image
                  filter={isDark ? 'brightness(999%)' : 'brightness(0%)'}
                  src={logo.path}
                  maxW="70%"
                  maxH={65}
                />
              )}
              {logo.component && <Box>{logo.component}</Box>}
            </HStack>
          </HStack>
          <Grid templateColumns="75% 25%">
            <Wrap>
              <Chip name="React" />
              <Chip name="TypeScript" />
              <Chip name="Node.js" />
              <Chip name="Yarn" />
              <Chip name="Git" />
              <Chip name="Vercel" />
              <Chip name="Jest" />
            </Wrap>
            <VStack justifyContent="flex-end" alignItems="flex-end">
              {/* TODO make this a new component? ExternalLink */}
              <Button
                as={Link}
                href="https://github.com/jakedemian/jake-personal-website"
                variant="link"
                color="primary.500"
                rightIcon={<ExternalLinkIcon />}
                target="_blank"
              >
                GitHub
              </Button>
            </VStack>
          </Grid>
        </VStack>
      </Flex>
    </Card>
  );
};

export default PersonalCard;

import React, { useMemo } from 'react';
import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { GoMarkGithub, GoMail } from 'react-icons/go';
import { FaLinkedin, FaDownload, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useIsMobile } from 'src/hooks/useIsMobile';
import { useIsDark } from 'src/hooks/useIsDark';

const snappyOneLiners = [
  'All rights ignored. Go ahead and steal it.',
  "If you're reading this: Why?",
  "I wasn't harmed (much) in making this website.",
  'Passed (almost) every unit test.',
  '; DROP TABLE users;--',
  'console.log("TODO delete me!!!");',
  '0 days since last production disaster.',
  'git push --force',
  'LGTM 🚀',
];

const Footer = () => {
  const navigate = useNavigate();
  const oneLiner = useMemo(
    () => snappyOneLiners[Math.floor(Math.random() * snappyOneLiners.length)],
    []
  );

  const isMobile = useIsMobile();

  return (
    <Flex flexDir="column" flex={1} justifyContent="flex-end">
      <HStack justifyContent="center" mb={2}>
        <Tooltip label="GitHub" placement="top" fontSize="xs">
          <IconButton
            aria-label="Jake Demian GitHub profile"
            onClick={() =>
              window.open('https://github.com/jakedemian', '_blank')
            }
            size="sm"
            variant="ghost"
            icon={<Icon as={GoMarkGithub} />}
          />
        </Tooltip>
        <Tooltip label="LinkedIn" placement="top" fontSize="xs">
          <IconButton
            aria-label="Jake Demian LinkedIn profile"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/jacob-demian-5a96799a/',
                '_blank'
              )
            }
            size="sm"
            variant="ghost"
            icon={<Icon as={FaLinkedin} />}
          />
        </Tooltip>
        <Tooltip label="Twitter" placement="top" fontSize="xs">
          <IconButton
            aria-label="Jake Demian Twitter profile"
            onClick={() =>
              window.open('https://twitter.com/jakedemian', '_blank')
            }
            size="sm"
            variant="ghost"
            icon={<Icon as={FaTwitter} />}
          />
        </Tooltip>
        {/* <Tooltip label="Youtube" placement="top" fontSize="xs">
          <IconButton
            aria-label="Jake Youtube"
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                '_blank'
              )
            }
            size="sm"
            variant="ghost"
            icon={<Icon as={FaYoutube} />}
          />
        </Tooltip> */}
        {/* <Tooltip label="Threads" placement="top" fontSize="xs">
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              window.open('https://www.threads.net/@jakedemian', '_blank')
            }
          >
            <Image
              src="/img/threads-logo.png"
              w={3}
              alt="Threads logo"
              filter={isDark ? 'brightness(9999%)' : 'brightness(0%)'}
            />
          </Button>
        </Tooltip> */}
        <Tooltip label="Email me" placement="top" fontSize="xs">
          <IconButton
            aria-label="Email Jake"
            onClick={() => navigate('/contact')}
            size="sm"
            variant="ghost"
            icon={<Icon as={GoMail} />}
          />
          {/* <Tooltip label="Text me" placement="top" fontSize="xs">
          <IconButton
            aria-label="Sms Text Jake"
            onClick={() => navigate('/contact')}
            size="sm"
            variant="ghost"
            icon={<Icon as={GoDeviceMobile} />} 
          />
        </Tooltip> */}
        </Tooltip>
      </HStack>
      {isMobile && ( // TODO try to make this a response value later, like using {base: foo, lg: bar}
        <VStack pt={{ base: 1, lg: 16 }} mb={4}>
          <Link href="/jake-demian-resume.pdf" target="_blank" variant="ghost">
            <HStack>
              <Icon as={FaDownload} />
              <Text fontSize={11}>Download Resume</Text>
            </HStack>
          </Link>
        </VStack>
      )}
      <Text fontSize={13} textAlign="center">
        &copy; {new Date().getFullYear()} Jake Demian
      </Text>
      <Text fontSize={11} mb={2} textAlign="center">
        {oneLiner}
      </Text>
    </Flex>
  );
};

export default Footer;

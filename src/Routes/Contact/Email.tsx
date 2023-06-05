import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  Tooltip,
  useTheme,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaCheck, FaQuestionCircle } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import { useIsDark } from 'src/hooks/useIsDark';

type FormState = {
  email: string;
  message: string;
};

const defaultFormState = {
  email: '',
  message: '',
};

type FormError = {
  field: 'email' | 'message';
  errorMessage: string;
};

const Email: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(defaultFormState);
  const [error, setError] = useState<FormError | null>(null);
  const [complete, setComplete] = useState<boolean>(false);
  const { colors } = useTheme();
  const { isDark } = useIsDark();

  const FormErrorMessage = ({ children }: { children: string }) => {
    return (
      <Text fontSize={13} color="red.500">
        {children}
      </Text>
    );
  };

  const handleSubmit = async () => {
    if (!formState.email) {
      setError({
        field: 'email',
        errorMessage: 'Email address is required so that I can respond to you!',
      });
      return;
    }

    if (
      // if this regex doesn't work you can blame chat gpt (I even used v4 with the browsing plugin!)
      !formState.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      setError({
        field: 'email',
        errorMessage: 'A valid email address must be used.',
      });
      return;
    }

    if (!formState.message) {
      setError({
        field: 'message',
        errorMessage: 'A message is required',
      });
      return;
    }

    // TODO this only works in production at the moment, so I need
    //to a) create a local vercel dev environment for testing this,
    //I also need to mock the email sending, and finally I need to
    //wrap this is something like react query instead of using a raw
    //fetch
    const response = await fetch('https://jakedemian.dev/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'jakedemian@gmail.com',
        from: 'jakedemian@gmail.com',
        subject: '👀 jakedemian.dev email form',
        text: `From <${formState.email}>: ${formState.message}`,
      }),
    });

    if (response.status === 200) {
      setComplete(true);
    }
  };

  if (complete) {
    return (
      <VStack p={{ base: 8, lg: 0 }} textAlign={'center'} mt={8}>
        <Text fontSize={20}>
          Success! Thanks for reaching out, I&apos;ll get back to you soon!
        </Text>
        <FaCheck size={70} color={colors.green[500]} />
      </VStack>
    );
  }

  return (
    <VStack w="100%" alignItems="left" p={{ base: 8, lg: 0 }}>
      <HStack alignItems="center">
        <Text>Email Address</Text>
        <Tooltip
          label="I promise I won't sell it 🙏 I just need to know who to reply to!"
          placement="top"
          fontSize="xs"
        >
          <span>
            <Icon as={FaQuestionCircle} cursor="pointer" mb={-1} />
          </span>
        </Tooltip>
      </HStack>
      <Input
        placeholder="mary.sue@email.com"
        type="email"
        onChange={event => {
          if (error?.field === 'email') {
            setError(null);
          }
          setFormState({ ...formState, email: event.target.value });
        }}
      />
      {error?.field === 'email' && (
        <FormErrorMessage>{error.errorMessage}</FormErrorMessage>
      )}

      <Box h={4} />
      <Text>Message</Text>
      <Textarea
        placeholder="What can I do for you?"
        onChange={event => {
          if (error?.field === 'message') {
            setError(null);
          }
          setFormState({ ...formState, message: event.target.value });
        }}
      ></Textarea>
      {error?.field === 'message' && (
        <FormErrorMessage>{error.errorMessage}</FormErrorMessage>
      )}

      {/* TODO loading state, just use react query */}
      <Button
        type="submit"
        bg="primary.500"
        color="white"
        rightIcon={<Icon as={HiOutlineMail} />}
        _disabled={{ bg: isDark ? '#1b1b1b' : '#eee', color: '#555' }}
        isDisabled={!formState.email || !formState.message}
        onClick={() => handleSubmit()}
        // TODO this is stretching automatically without setting a width due to
        //flex and i'm so close to release I'll fix it later, hardcoding for now
        w={{ base: 'auto', lg: 150 }}
      >
        Send
      </Button>
    </VStack>
  );
};

export default Email;

import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  keyframes,
  Text,
  Textarea,
  Tooltip,
  useTheme,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaCheck, FaQuestionCircle } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImSpinner9 } from 'react-icons/im';
import { useMutation } from 'react-query';

import { useCanSendEmail } from 'src/hooks/useCanSendEmail';
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

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Email: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(defaultFormState);
  const [validationError, setValidationError] = useState<FormError | null>(
    null
  );
  const { canSendEmail, handleSuccessfulEmailSend } = useCanSendEmail();
  const { colors } = useTheme();
  const { isDark } = useIsDark();

  const FormErrorMessage = ({ children }: { children: string }) => {
    return (
      <Text fontSize={13} color="red.500">
        {children}
      </Text>
    );
  };

  const isSubmitDisabled = () => {
    return !formState.email || !formState.message || mutation.isLoading;
  };

  const mutation = useMutation(
    async () => {
      const response = await fetch(
        process.env.REACT_APP_SEND_EMAIL_API_ENDPOINT as string,
        {
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
        }
      );

      if (!response.ok) {
        throw await response.text();
      }

      const message = await response.text();
      return message;
    },
    {
      onSuccess: () => {
        handleSuccessfulEmailSend();
      },
    }
  );

  const handleSubmit = async () => {
    if (!formState.email) {
      setValidationError({
        field: 'email',
        errorMessage: 'Email address is required so that I can respond to you!',
      });
      return;
    }

    if (
      // if this regex doesn't work you can blame chat gpt (I even used v4 with the browsing plugin!)
      !formState.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      setValidationError({
        field: 'email',
        errorMessage: 'A valid email address must be used.',
      });
      return;
    }

    if (!formState.message) {
      setValidationError({
        field: 'message',
        errorMessage: 'A message is required',
      });
      return;
    }

    mutation.mutate();
  };

  if (!canSendEmail) {
    return (
      <VStack p={{ base: 8, lg: 0 }} textAlign={'center'} mt={8}>
        <Text fontSize={20}>
          Thanks for reaching out, I&apos;ll get back to you soon!
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
          if (validationError?.field === 'email') {
            setValidationError(null);
          }
          setFormState({ ...formState, email: event.target.value });
        }}
      />
      {validationError?.field === 'email' && (
        <FormErrorMessage>{validationError.errorMessage}</FormErrorMessage>
      )}
      <Box h={4} />
      <Text>Message</Text>
      <Textarea
        placeholder="What can I do for you?"
        onChange={event => {
          if (validationError?.field === 'message') {
            setValidationError(null);
          }
          setFormState({ ...formState, message: event.target.value });
        }}
      ></Textarea>
      {validationError?.field === 'message' && (
        <FormErrorMessage>{validationError.errorMessage}</FormErrorMessage>
      )}
      <Button
        type="submit"
        bg="primary.500"
        color="white"
        _disabled={{
          bg: isDark ? '#1b1b1b' : '#eee',
          color: isDark ? '#555' : '#aaa',
          _hover: {
            bg: isDark ? '#1b1b1b' : '#eee',
            color: '#555',
            cursor: 'default',
          },
        }}
        _hover={{ bg: 'primary.400' }}
        isDisabled={isSubmitDisabled()}
        onClick={() => handleSubmit()}
        // TODO this is stretching automatically without setting a width due to
        //flex and i'm so close to release I'll fix it later, hardcoding for now
        w={{ base: 'auto', lg: 150 }}
      >
        <HStack w="100%" justifyContent="center">
          {mutation.isLoading ? <Text>Working</Text> : <Text>Send</Text>}
          {mutation.isLoading ? (
            <>
              <Icon
                as={ImSpinner9}
                animation={`${spin} 0.75s linear infinite`}
              />
            </>
          ) : (
            <Icon as={HiOutlineMail} />
          )}
        </HStack>
      </Button>
      <Box textAlign={{ base: 'center', lg: 'left' }}>
        {mutation.isError && (
          <FormErrorMessage>{String(mutation.error)}</FormErrorMessage>
        )}
      </Box>
    </VStack>
  );
};

export default Email;

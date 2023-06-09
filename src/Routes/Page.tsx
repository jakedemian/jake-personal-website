import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

const pageTransition = {
  hidden: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.2 } },
};

const Page: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      <VStack
        alignItems={{ base: 'center', lg: 'flex-start' }}
        pt={{ base: 0, lg: 4 }}
      >
        <Heading fontFamily="Montserrat" as="h2" fontSize={24} fontWeight={600}>
          {title}
        </Heading>
        <Box flex={1} w="100%">
          {children}
        </Box>
      </VStack>
    </motion.div>
  );
};

export default Page;

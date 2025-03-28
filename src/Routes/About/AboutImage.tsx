import React, { useContext, useEffect, useState } from 'react';
import { Box, Text, useColorMode, Icon, VStack } from '@chakra-ui/react';
import { FaHeart, FaBaby } from 'react-icons/fa';
import { GiBabyBottle } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

import { ClickCountContext } from 'src/context/ClickCountContext';
import { useIsMobile } from 'src/hooks/useIsMobile';
import { IconAs } from 'src/common/types/icon';

const textOptions = [
  'Cute!',
  '<3',
  <Icon key={'fa-baby'} as={FaBaby as IconAs} />,
  'Baby',
  <Icon key="gi-baby-bottle" as={GiBabyBottle as IconAs} />,
  'Aww!',
  ':)',
];
const heartMotionVariants = {
  initial: { y: 0, opacity: 1, scale: 0.5 },
  animate: { y: -150, opacity: 0, scale: 1 },
};
let heartId = 0;

const AboutImage: React.FC = () => {
  const colorMode = useColorMode();
  const isDark = colorMode.colorMode === 'dark';
  const { incrementClickCount } = useContext(ClickCountContext);
  const isMobile = useIsMobile();

  const getRandomText = () => {
    return textOptions[Math.floor(Math.random() * textOptions.length)];
  };

  const getRandomTextNoRepeat = () => {
    let text = getRandomText();
    if (text === hoverText) {
      const index = textOptions.findIndex(t => t === text);
      text = textOptions[index + 1 === textOptions.length ? 0 : index + 1];
    }
    return text;
  };

  const [opacity, setOpacity] = useState<number>(0);
  const [hoverText, setHoverText] = useState<string | React.ReactNode>(
    getRandomText()
  );
  const [hearts, setHearts] = useState<{ id: number; opacity: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // TODO this could use some optimization
      setHearts(prevHearts =>
        prevHearts
          .map(heart => ({ ...heart, opacity: heart.opacity - 0.01 }))
          .filter(heart => heart.opacity > 0)
      );
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMobile && opacity > 0) {
      setTimeout(() => {
        setOpacity(0);
      }, 300);
    }
  }, [opacity, isMobile]);

  return (
    <Box position="relative">
      <Box
        w={175}
        h={175}
        minW={175}
        my={{ base: 8, lg: 0 }}
        position="relative"
        borderWidth={2}
        borderColor={isDark ? 'white' : 'gray.600'}
        borderStyle="solid"
        borderRadius="10%"
        overflow="hidden"
      >
        <Box
          position="absolute"
          minWidth="175px"
          w="175px"
          height="175"
          bgImage="/img/jake-and-son.webp"
          objectFit="cover"
          objectPosition="center"
          backgroundSize="140%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        {/* TODO check if I can make this no-select or something on mobile so it doesnt highlight blue when you tap it */}
        <Box
          id="click-box"
          position="absolute"
          minWidth="175px"
          w="175px"
          height="175"
          bgColor="primary.500"
          cursor="pointer"
          userSelect="none"
          _active={{
            outline: 'none',
          }}
          _focus={{
            outline: 'none',
          }}
          sx={{
            WebkitTapHighlightColor: 'transparent',
          }}
          onMouseEnter={() => setOpacity(0.9)}
          onMouseLeave={() => setOpacity(0)}
          onMouseDown={() => {
            isMobile && setOpacity(0.9);
            setHoverText(getRandomTextNoRepeat());
            setHearts(prevHearts => [
              ...prevHearts,
              { id: heartId++, opacity: 1 },
            ]);
            incrementClickCount();
          }}
          opacity={opacity}
          transition="opacity 0.2s"
        >
          <VStack height="100%" justifyContent="center">
            <Text
              fontSize={48}
              color="dark.text"
              fontWeight={700}
              userSelect="none"
            >
              {hoverText}
            </Text>
          </VStack>
        </Box>
      </Box>
      {hearts.map(heart => (
        <AnimatePresence
          key={heart.id}
          exitBeforeEnter
          onExitComplete={() =>
            setHearts(hearts.filter(h => h.id !== heart.id))
          }
        >
          <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={heartMotionVariants}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              top: '0',
              left: '32%',
              transform: 'translate(-80%)',
            }}
          >
            <Icon
              as={FaHeart as IconAs}
              w={16}
              h={16}
              color={isDark ? 'white' : 'primary.300'}
            />
          </motion.div>
        </AnimatePresence>
      ))}
    </Box>
  );
};

export default AboutImage;

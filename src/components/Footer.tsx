import React from 'react';
import {
  Box,
  Text,
  HStack,
  Center,
  Pressable,
  CheckIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
  useColorModeValue,
} from 'native-base';

const Footer = () => {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box flex={1}>
      <Center flex={1} bg={useColorModeValue('warmGray.50', 'coolGray.800')} />
      <HStack
        bg={useColorModeValue('warmGray.50', 'coolGray.800')}
        alignItems="center"
        safeAreaBottom
        shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}>
          <Center>
            <SunIcon size="4" />
            <Text
              color={useColorModeValue('darkText', 'lightText')}
              fontSize="12">
              {' '}
              Home{' '}
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}>
          <Center>
            <MoonIcon size="4" />
            <Text
              color={useColorModeValue('darkText', 'lightText')}
              fontSize="12">
              Pokedex
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}>
          <Center>
            <SearchIcon size="4" />
            <Text color={useColorModeValue('darkText', 'lightText')}>
              Movedex
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}>
          <Center>
            <CheckIcon size="4" />
            <Text
              color={useColorModeValue('darkText', 'lightText')}
              fontSize="12">
              Settings
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;

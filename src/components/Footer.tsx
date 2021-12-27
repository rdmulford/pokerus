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
  AddIcon,
  useColorModeValue,
} from 'native-base';
import {useGlobalDispatch, useGlobalState} from 'components/Global';
import styled from 'styled-components/native';

const Footer = () => {
  const [viewState] = useGlobalState();
  const [setViewState] = useGlobalDispatch();

  const onPressHook = (view: number) => {
    setViewState(view);
    console.log('Current view state: ', view);
  };

  const Wrapper = styled(Box)`
    flex: 1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  `;

  return (
    <Wrapper>
      <Center flex={1} bg={useColorModeValue('warmGray.50', 'coolGray.800')} />
      <HStack
        bg={useColorModeValue('warmGray.50', 'coolGray.800')}
        alignItems="center"
        safeAreaBottom
        shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={viewState === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => onPressHook(0)}>
          <Center>
            <SunIcon size="4" />
            <Text fontSize="12"> Pokedex </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={viewState === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => onPressHook(1)}>
          <Center>
            <MoonIcon size="4" />
            <Text fontSize="12">Moves</Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={viewState === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => onPressHook(2)}>
          <Center>
            <SearchIcon size="4" />
            <Text fontSize="12">Type Chart</Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={viewState === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => onPressHook(3)}>
          <Center>
            <CheckIcon size="4" />
            <Text fontSize="12">Abilities</Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={viewState === 4 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => onPressHook(4)}>
          <Center>
            <AddIcon size="4" />
            <Text fontSize="12">Items</Text>
          </Center>
        </Pressable>
      </HStack>
    </Wrapper>
  );
};

export default Footer;

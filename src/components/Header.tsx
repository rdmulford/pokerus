import React from 'react';
import {
  HStack,
  IconButton,
  Text,
  Box,
  HamburgerIcon,
  ThreeDotsIcon,
} from 'native-base';

function Header() {
  return (
    <Box>
      <Box safeAreaTop />
      <HStack px="1" py="1" justifyContent="space-between" alignItems="center">
        <HStack space="4" alignItems="center">
          <IconButton icon={<HamburgerIcon size="sm" />} />
          <Text fontSize="20" fontWeight="bold">
            Pokerus
          </Text>
        </HStack>
        <HStack space="2">
          <IconButton icon={<ThreeDotsIcon size="sm" />} />
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;

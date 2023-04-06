import { Flex, Link, Text, Spacer } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="space-between"
      alignItems="center"
    >
      <Spacer />
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href="https://5bang.top" isExternal rel="noopener noreferrer">
          5bang.top
        </Link>
      </Text>
      <Spacer />
      <ThemeToggle />
    </Flex>
  );
};

export default Footer;

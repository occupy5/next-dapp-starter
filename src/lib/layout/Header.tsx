import { Box, Flex } from '@chakra-ui/react';

import { RainbowKitCustomConnectButton } from '~/lib/layout/ConnectButton';

const Header = () => {
  return (
    <Box>
      <Flex justifyContent="end" gap={4}>
        <RainbowKitCustomConnectButton />
      </Flex>
    </Box>
  );
};

export default Header;

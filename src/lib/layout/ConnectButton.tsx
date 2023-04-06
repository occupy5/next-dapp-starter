// import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Box, Flex, HStack, Button, Text } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

import { useAccountBalance } from '~/hooks/scaffold-eth/useAccountBalance';
import { useNetworkColor } from '~/hooks/scaffold-eth/useNetworkColor';
import { getTargetNetwork } from '~/utils/scaffold-eth/network';

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  const networkColor = useNetworkColor();
  const configuredNetwork = getTargetNetwork();
  const { address } = useAccount();
  const { balance, symbol } = useAccountBalance(address);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        mounted,
      }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal}>Connect Wallet</Button>
                );
              }

              if (chain.unsupported || chain.id !== configuredNetwork.id) {
                return (
                  <>
                    <Text fontSize="sm" color={{ color: networkColor }}>
                      {configuredNetwork.name}
                    </Text>
                    <button
                      className="btn btn-sm btn-error ml-2"
                      onClick={openChainModal}
                      type="button"
                    >
                      <span>Wrong network</span>
                      {/* <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" /> */}
                    </button>
                  </>
                );
              }

              return (
                <HStack>
                  <Box>
                    <Flex direction="column">
                      <Flex justifyContent="space-between">
                        <Text fontSize="sm" as="b">
                          {balance?.toFixed(4)}
                        </Text>
                        <Text fontSize="sm">{symbol}</Text>
                      </Flex>
                      <Text fontSize="sm" color={networkColor}>
                        {chain.name}
                      </Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Button onClick={openAccountModal}>
                      {/* <BlockieAvatar address={account.address} size={24} ensImage={account.ensAvatar} /> */}
                      <Text fontSize="md">{account.displayName}</Text>
                      <span>
                        {/* <ChevronDownIcon className="h-6 w-4" /> */}
                      </span>
                    </Button>
                  </Box>
                </HStack>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

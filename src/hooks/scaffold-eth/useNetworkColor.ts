import { useDarkMode } from 'usehooks-ts';

import { getTargetNetwork } from '~/utils/scaffold-eth/network';

const DEFAULT_NETWORK_COLOR: [string, string] = ['#666666', '#bbbbbb'];

/**
 * Gets the color of the target network
 */
export const useNetworkColor = () => {
  const { isDarkMode } = useDarkMode();
  const colorConfig = getTargetNetwork().color ?? DEFAULT_NETWORK_COLOR;

  // eslint-disable-next-line no-nested-ternary
  return Array.isArray(colorConfig)
    ? isDarkMode
      ? colorConfig[1]
      : colorConfig[0]
    : colorConfig;
};

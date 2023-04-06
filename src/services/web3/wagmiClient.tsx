import { createClient } from 'wagmi';

import { appChains, wagmiConnectors } from './wagmiConnectors';

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: wagmiConnectors,
  provider: appChains.provider,
});

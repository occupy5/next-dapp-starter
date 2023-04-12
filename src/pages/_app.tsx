import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@rainbow-me/rainbowkit/styles.css';
import { DefaultSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { useDarkMode } from 'usehooks-ts';
import { WagmiConfig } from 'wagmi';

import defaultSEOConfig from '../../next-seo.config';
import { Chakra } from '~/lib/components/Chakra';
import Layout from '~/lib/layout';
import { wagmiClient } from '~/services/web3/wagmiClient';
import { appChains } from '~/services/web3/wagmiConnectors';
import '~/lib/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={appChains.chains}
        theme={isDarkTheme ? darkTheme() : lightTheme()}
      >
        <Chakra>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Chakra>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;

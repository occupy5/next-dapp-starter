import { useEffect, useState } from 'react';
import { useBalance } from 'wagmi';

import { getTargetNetwork } from '~/utils/scaffold-eth/network';

export function useAccountBalance(address?: `0x${string}`) {
  const [balance, setBalance] = useState<number | null>(null);
  const [symbol, setSymbol] = useState<string | null>(null);

  const {
    data: fetchedBalanceData,
    isError,
    isLoading,
  } = useBalance({
    address,
    watch: true,
    chainId: getTargetNetwork().id,
  });

  useEffect(() => {
    if (fetchedBalanceData?.formatted) {
      setBalance(Number(fetchedBalanceData.formatted));
    }
    if (fetchedBalanceData?.symbol) {
      setSymbol(fetchedBalanceData.symbol);
    }
  }, [fetchedBalanceData]);

  return { balance, symbol, isError, isLoading };
}

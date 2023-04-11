import type { BigNumber } from 'ethers';
import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
} from 'wagmi';

import Comments from '../../lib/pages/sample/Comments.json';
import { getTargetNetwork } from '~/utils/scaffold-eth/network';

export interface Comment {
  id: string;
  topic: string;
  message: string;
  creator_address: string;
  display_address: string;
  created_at: BigNumber;
}

export const useSampleContractRead = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const contractRead = useContractRead({
    chainId: getTargetNetwork().id,
    abi: Comments.abi,
    address: '0x8Ac89A563dF158e01C012514cCC08e20ac5A6feA',
    functionName: 'getComments',
    args: ['my-blog-post'],
  });

  const fetchData = () => {
    const { data } = contractRead;

    if (data && Array.isArray(data)) {
      const parsedComments: Comment[] = data.map((comment) => ({
        id: comment[0],
        topic: comment[1],
        creator_address: comment[2],
        message: comment[3],
        created_at: comment[4],
        display_address: `${comment[2]?.slice(0, 5)}...${comment[2]?.slice(
          -4
        )}`,
      }));
      setComments(parsedComments);
    }
    setIsLoading(false);
  };

  useEffectOnce(() => {
    fetchData();
  });

  return { comments, isLoading };
};

export const useSampleContractWrite = () => {
  const { config, error } = usePrepareContractWrite({
    address: '0x8Ac89A563dF158e01C012514cCC08e20ac5A6feA',
    abi: Comments.abi,
    functionName: 'addComment',
    args: ['my-blog-post', 'test comment'],
  });
  const { write } = useContractWrite(config);

  return { write, error };
};

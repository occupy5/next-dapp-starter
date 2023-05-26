import {
  VStack,
  Center,
  Spinner,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import {
  useSampleContractRead,
  useSampleContractWrite,
} from '~/hooks/scaffold-eth/useSampleContract';

const SampleUI = () => {
  const { comments, isLoading } = useSampleContractRead();

  const [message, setMessage] = useState<string>();

  const { write, error } = useSampleContractWrite(message);

  const toast = useToast();
  const id = 'test-toast';

  useEffect(() => {
    if (error && !toast.isActive(id)) {
      const showError = (errorMessage: string) => {
        toast({
          id,
          title: 'Account created.',
          description: errorMessage,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      };
      showError(error.message);
    }
  }, [error, toast]);

  return (
    <VStack>
      {isLoading && (
        <Center p={8}>
          <Spinner />
        </Center>
      )}
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={4}
      >
        {comments.map((comment) => (
          <GridItem key={comment.id}>
            <Card minW="250">
              <CardHeader>{comment.display_address}</CardHeader>
              <CardBody>{comment.message}</CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
      <Input
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={() => write?.()}>Submit</Button>
    </VStack>
  );
};

export default SampleUI;

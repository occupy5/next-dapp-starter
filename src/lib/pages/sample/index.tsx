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
} from '@chakra-ui/react';

import {
  useSampleContractRead,
  useSampleContractWrite,
} from '~/hooks/scaffold-eth/useSampleContract';

const SampleUI = () => {
  const { comments, isLoading } = useSampleContractRead();

  const { write, error } = useSampleContractWrite();

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
      <Button onClick={() => write?.()}>Submit</Button>
      {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>
      )}
    </VStack>
  );
};

export default SampleUI;

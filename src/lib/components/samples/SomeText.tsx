import { Grid, Heading, Text } from '@chakra-ui/react';

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        Next Dapp Starter
      </Heading>

      <Text fontSize="xs">
        The Dapp with Nextjs, Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};

export default SomeText;

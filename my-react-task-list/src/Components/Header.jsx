import { Box, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg="gray.900" p={4} mb={4}>
  <Heading as="h1" size="xl" color="rosybrown" textAlign="center">
    To-do List
  </Heading>
</Box>
  );
};
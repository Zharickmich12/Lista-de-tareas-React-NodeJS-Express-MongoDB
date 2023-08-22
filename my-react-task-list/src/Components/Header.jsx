import { Box, Heading, Button, useColorMode } from '@chakra-ui/react';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="gray.900" p={4} mb={4} display="flex" justifyContent="space-between">
      <Heading as="h1" size="xl" color="rosybrown" textAlign="center">
        To-do List
      </Heading>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
      </Button>
    </Box>
  );
};
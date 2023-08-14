import { Box, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box p={8} bg="gray.900" borderRadius="md" boxShadow="md" textAlign="center">
      <Heading as="h2" size="lg" color="rosybrown" mb={4}>
        Bienvenido a la Aplicación de Lista de Tareas
      </Heading>
      <Text color="mistyrose">Organiza tu día de manera eficiente y mantén un registro de tus tareas pendientes.</Text>
      <Text color="mistyrose">¡Empieza ahora y simplifica tu vida!</Text>
    </Box>
  );
};

export default Home;
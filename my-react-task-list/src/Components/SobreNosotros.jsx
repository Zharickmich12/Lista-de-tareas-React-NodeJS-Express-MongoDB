import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const SobreNosotros = () => {
  return (
    <Box p={8} bg="gray.800" borderRadius="md" boxShadow="md" textAlign="center">
      <Heading as="h2" size="lg" color="rosybrown" mb={4}>
        Sobre Nosotros
      </Heading>
      <Text color="mistyrose">Bienvenido a la Aplicación de Lista de Tareas</Text>
      <Text color="mistyrose">
        Esta aplicación es una herramienta simple y eficiente para ayudarte a administrar tus tareas diarias de manera efectiva.
      </Text>
      <Text color="mistyrose">Características clave:</Text>
      <UnorderedList textAlign="left" color="mistyrose">
        <ListItem>Crea nuevas tareas con nombres descriptivos y, opcionalmente, añade una descripción detallada.</ListItem>
        <ListItem>Marca las tareas como completadas a medida que las finalizas.</ListItem>
        <ListItem>Elimina tareas que ya no necesitas.</ListItem>
        <ListItem>Las tareas completadas se destacan para una mejor organización.</ListItem>
      </UnorderedList>
      <Text color="mistyrose">Esta aplicación está construida utilizando tecnologías modernas:</Text>
      <UnorderedList textAlign="left" color="mistyrose">
        <ListItem>React: Una biblioteca de JavaScript para crear interfaces de usuario interactivas y reutilizables.</ListItem>
        <ListItem>React Router: Una librería para gestionar las rutas y la navegación en aplicaciones React de una manera declarativa.</ListItem>
        <ListItem>Custom Hooks: Utiliza hooks personalizados para manejar el estado y la lógica de las tareas.</ListItem>
        <ListItem>CSS: Estiliza la aplicación utilizando CSS para crear una interfaz atractiva y fácil de usar.</ListItem>
      </UnorderedList>
      <Text color="mistyrose">Espero que esta aplicación te ayude a mantenerte organizado y productivo. ¡Disfrútala!</Text>
    </Box>
  );
};

export default SobreNosotros;
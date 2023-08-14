import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, UnorderedList, ListItem } from '@chakra-ui/react';

const Menu = () => {
  return (
    <Box bg="gray.900" p={4} textAlign="center">
      <UnorderedList listStyleType="none" m={0} p={0}>
        <ListItem display="inline-block" mr={4}>
          <Link as={RouterLink} to="/" color="rosybrown" fontWeight="bold" _hover={{ color: 'mistyrose' }}>
            Home
          </Link>
        </ListItem>
        <ListItem display="inline-block" mr={4}>
          <Link as={RouterLink} to="/tareas" color="rosybrown" fontWeight="bold" _hover={{ color: 'mistyrose' }}>
            Tareas
          </Link>
        </ListItem>
        <ListItem display="inline-block">
          <Link as={RouterLink} to="/sobre-nosotros" color="rosybrown" fontWeight="bold" _hover={{ color: 'mistyrose' }}>
            Sobre Nosotros
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Menu;
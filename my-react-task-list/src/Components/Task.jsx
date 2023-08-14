import { Box, Checkbox, Button } from '@chakra-ui/react';

export const Task = ({ name, description, completed, onDelete, onToggleComplete }) => {
  const handleCheckboxChange = () => {
    onToggleComplete(name, !completed);
  };

  return (
    <Box
    p={4}
    bg={completed ? 'gray.700' : 'gray.800'}
    color={completed ? 'gray.100' : 'rosybrown'} 
    borderRadius="md"
    boxShadow="sm"
    display="flex"
    alignItems="center"
    mb={2}
  >
    <Checkbox isChecked={completed} onChange={handleCheckboxChange} mr={4} />
    <Box flex={1}>
      <span>{name}</span>
      {description && <p>{description}</p>}
    </Box>
    <Button colorScheme={completed ? 'red' : 'gray'} variant={completed ? 'solid' : 'outline'} onClick={() => onDelete(name)} ml={2}>
      Eliminar
    </Button>
  </Box>
  );
};
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { Task } from './Task';

export const Tasklist = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <Box p={8} bg="gray.900" borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" color="rosybrown" mb={4} textAlign="center">
        Lista de Tareas
      </Heading>
      <UnorderedList listStyleType="none" p={0} m={0}>
        {tasks.map((task, index) => (
          <ListItem key={index} mb={2}>
            <Task
              name={task.name}
              description={task.description}
              completed={task.completed}
              onDelete={() => onDelete(task.name)}
              onToggleComplete={onToggleComplete}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
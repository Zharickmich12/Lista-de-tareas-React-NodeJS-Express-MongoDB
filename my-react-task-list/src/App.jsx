import { Box, Flex, Input, Button, ChakraProvider, ColorModeScript, extendTheme, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Tasklist } from './Components/Tasklist';
import { useTaskManager } from './useTaskManager';
import Home from './Components/Home';
import SobreNosotros from './Components/SobreNosotros';
import Menu from './Components/Menu';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark', 
    useSystemColorMode: false,
  },
  colors: {
    rosybrown: {
      50: '#f6e7e7',
    },
    mistyrose: {
      50: '#fdf2f2',
    },
    gray: {
      50: '#ffffff',
    },
    black: '#000000',
    white: '#ffffff',
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
      },
    }),
  },
});

const App = () => {
  const { tasks, createTask, deleteTask, toggleComplete } = useTaskManager();

  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim().length >= 3) {
      createTask(newTaskName, newTaskDescription);
      setNewTaskName('');
      setNewTaskDescription('');
    } else {
      alert("El nombre de la tarea debe tener al menos 3 caracteres.");
    }
  };

  return (
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Router>
      <Box bg="black" color="white" minHeight="100vh">
        <Header />
          <Menu />
          <Flex justify="center" align="center" mt={4}>
            <Box w="800px" p={4}>
              <Input
                placeholder="Nueva tarea"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                color="rosybrown"
                _placeholder={{ color: 'rosybrown' }}
                mb={2}
              />
              <Input
                placeholder="Descripción (opcional)"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                color="rosybrown"
                _placeholder={{ color: 'rosybrown' }}
                mb={2}
              />
              <Button
                colorScheme="rosybrown"
                bg="rosybrown"
                onClick={handleAddTask}
                mb={2}
              >
                Añadir tarea
              </Button>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/tareas"
                  element={<Tasklist tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />}
                />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              </Routes>
            </Box>
          </Flex>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
import './Components/Styles.css';
import { Header } from './Components/Header';
import { Tasklist } from './Components/Tasklist';

const App = () => {
  const tasks = [
    { name: 'Tarea 1', completed: false},
    { name: 'Tarea 2', completed: true},
    { name: 'Tarea 3', completed: false},
  ];

  return (
      <div>
        <Header/>
        <Tasklist tasks={tasks}/>
      </div>  
      
  )
}

export default App;

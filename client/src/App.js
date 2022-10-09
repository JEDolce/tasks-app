import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/tasks/new' element={<TaskForm />} />
          <Route path='/tasks/:id/edit' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

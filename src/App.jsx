import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Redux To Do</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

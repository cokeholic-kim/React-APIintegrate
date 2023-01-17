import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoHeader from './components/TodoHeader';
import Todoitem2 from './components/Todoitem2';
import TodoContext from './context/todoContext';

function App() {
  return (
    <TodoContext>
      <div className="App">
        <TodoHeader></TodoHeader>
        <TodoCreate></TodoCreate>
        <Todoitem2></Todoitem2>
      </div>
    </TodoContext>
  );
}

export default App;

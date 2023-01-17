import { createGlobalStyle } from 'styled-components';
import './App.css';
import TodoCreate2 from './components/TodoCreate2';
import TodoHeader from './components/TodoHeader';
import Todoitem2 from './components/Todoitem2';
import TodoTemplate from './components/TodoTemplate';
import TodoContext from './context/todoContext';

//글로벌 스타일을 추가하고싶을때
const GlobalStyled = createGlobalStyle`
body{
  baclground: #e9ecef;
}`;
function App() {
  return (
    <TodoContext className='App'>
      <GlobalStyled />
        <TodoTemplate>
          <TodoHeader></TodoHeader>
          <Todoitem2></Todoitem2>
          <TodoCreate2></TodoCreate2>
        </TodoTemplate>
    </TodoContext>
  );
}

export default App;

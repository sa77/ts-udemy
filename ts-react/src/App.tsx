import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

import { Todo } from './todo.model';


// `useState` is another hook - always returns an erray with 2 elements
//     - first is the latest state snapshot for this render cycle
//     - second is the function to update that state and re-render that component
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    // this also works (not ideal though)
    // setTodos([...todos, {id: Math.random().toString(), text: text}]);
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: text}
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;

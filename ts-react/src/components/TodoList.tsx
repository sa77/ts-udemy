import React from 'react';

import './TodoList.css';

interface TodoListProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
}

// every component has a `children` prop -- generic type adds on to this
const TodoList: React.FC<TodoListProps> = (props) => {

    return <ul>
        {props.items.map(todo => (
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
            </li>
        ))}
    </ul>;
}

// bind(null, todo.id) - the first parameter is `this` keyword which is null, second argument here is the first parameter received `onDeleteTodo`

export default TodoList;

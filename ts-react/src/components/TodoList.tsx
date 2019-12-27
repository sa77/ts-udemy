import React from 'react';

interface TodoListProps {
    items: {id: string, text: string}[];
}

// every component has a `children` prop -- generic type adds on to this
const TodoList: React.FC<TodoListProps> = (props) => {

    return <ul>
        {props.items.map(todo => (
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>;
}

export default TodoList;

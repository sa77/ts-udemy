import React, { useRef } from 'react';

// `useRef` is a hook
const NewTodo: React.FC = () => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewTodo;

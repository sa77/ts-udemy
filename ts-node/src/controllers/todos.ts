import { RequestHandler } from 'express';
//         ^^ this will be gone in JS compiled code because we're just importing a type here - not bulk of code

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

// RequestHandler cuts down the repetative need to add req, res, next types in these controller funcs
export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({message: 'Created todo.', createdTodo: newTodo});
};


export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS})
}


// add TS support in RequestHandler
export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;

    const updatedText = (req.body as {text: string}).text;

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!')
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
}


export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!')
    }

    TODOS.splice(todoIndex, 1);
    res.json({ message: 'Deleted!' });
}

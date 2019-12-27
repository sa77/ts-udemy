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



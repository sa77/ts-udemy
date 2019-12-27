// `require` keyword exists in nodeJS but TS is not aware of it
// this is a nodeJS import syntax
// const express = require('express');

// use this TS syntax instead (this is experimental in nodeJS writtern in commonJS)
import express, { Request, Response, NextFunction } from 'express';

import { json } from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();


// middleware from body-parser - parses the bodies from all incoming requests and extracts
// any JSON data in there then populate `body` key on request object with that parsed JSON data
app.use(json());

app.use('/todos', todoRoutes);

// define a error handling expressJS middleware
// this gets fired by express if any other middleware prior to this one has error
// `next` is the next middleware in line for the rquest to continue
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500).json({ message: err.message });
});


app.listen(3000);

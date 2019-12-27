// `require` keyword exists in nodeJS but TS is not aware of it
// this is a nodeJS import syntax
// const express = require('express');

// use this TS syntax instead (this is experimental in nodeJS writtern in commonJS)
import express from 'express';

const app = express();

app.listen(3000);

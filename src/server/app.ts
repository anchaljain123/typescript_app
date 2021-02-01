import { Express } from 'express';
import { json } from 'body-parser';

import * as routes from './routes';
import * as requestLogger from './middlewares/requestLogger';
import * as errorHandler from './middlewares/errorHandler';

import express = require('express');

const app: Express = express();

app.use(json());

app.use(requestLogger);
app.use(errorHandler);

app.use(routes);

export = app;
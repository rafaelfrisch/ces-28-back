import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import './connect';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors('*'));
app.use(compression());

// use all routes
require('./routes')(app);
// check for errors
require('./errorHandlers')(app);

export default app;

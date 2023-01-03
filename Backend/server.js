import express from 'express';
import mongoose from 'mongoose';
const app = express();

import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';
dotenv.config()

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';

// db and authenticateUser
import connectDB from './db/connect.js';

// routes
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

// middleware
import authenticateUser from './middleware/auth.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
};

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.static(path.resolve(__dirname, './build')));
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
mongoose.set('strictQuery', true);


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'))
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    });
  } catch (error) {
    console.log(error);
  }
};

start();
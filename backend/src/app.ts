import express from 'express';
import cors from 'cors';
import scoreRoutes from './routes/scoreRoutes';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/scores', scoreRoutes);

// catch-all error middleware
app.use(errorHandler);

export default app;
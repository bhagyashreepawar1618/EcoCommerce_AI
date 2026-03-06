import express from 'express';
import productRouter from './routes/product.routes.js';
import userRouter from './routes/User.routes.js';
import cors from 'cors';
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());

app.use('/api/ai/products', productRouter);
app.use('/api/v1/user', userRouter);

export { app };

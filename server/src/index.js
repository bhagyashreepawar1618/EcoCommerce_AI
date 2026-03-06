import connectDB from './db/index.js';
import { app } from './app.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB()
  .then(async () => {
    app.listen(process.env.PORT || 8000, () => {
      console.log('server is listening to ', process.env.PORT);
    });
    app.get('/', (req, res) => {
      res.send('<h1>Hello user!!</h1>');
    });
  })
  .catch((err) => {
    console.log('MongoDb connection failed.!!!');
  });

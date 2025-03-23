import express from 'express';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

const app = express();
const port = 5000;

createConnection().then(() => {
  console.log('Connected to PostgreSQL');

  app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
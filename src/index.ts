import express from 'express';
import pokemonController from './controllers/pokemon';

const app = express();
app.use('/', pokemonController);

export const server = app.listen(3000, () =>
  console.log(`🚀 Started on port 3000`)
);

import { Request, Response, Router } from 'express';
import axios from 'axios';

const router = Router();
router.get('/', async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = 20;
  const offset = page - 1;

  const u = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const headers = {
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY2MjA0MjMzNCwiaWF0IjoxNjYyMDQyMzM0fQ.xi3uKpbHXXxE5iTOkDrkHJfpXQhGQGjLHXwC1SE-kFI'
  };

  const r = await axios.get(u, { headers });
  res.json(r.data.results);
});

export default router;

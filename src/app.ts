// index.js
import express, {Request, Response} from 'express';
import { CONSTS } from './config'

export const app = express();
const PORT = CONSTS.PORT

app.get('/health', (_, res: Response) => {
  res.json({ status: 'ok' });
});

app.get('/query', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok',
    endpoint: 'query',
    test: true,
  });
});
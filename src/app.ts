import express, {Request, Response} from 'express';

export const app = express();

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
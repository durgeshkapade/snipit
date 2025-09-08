import express, { type Request, type Response } from 'express';
const app = express();
import { connectDB } from '@/config/db.js';
import pasteRouter from './routes/paste.route.js';

connectDB();
const port = process.env.PORT || 3000;

app.get('/hello', (req: Request, res: Response) => {
    res.send("Hello")
});

app.use(express.json())
    .use('/api/', pasteRouter)


app.listen(port, () =>
    console.log(`Listening on ${port}`)
);
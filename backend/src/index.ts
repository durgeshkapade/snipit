import express, { type Request, type Response } from 'express';
const app = express();
import { connectDB } from '@/config/db.js';
import pasteRouter from '@/routes/paste.route.js';
import cors from "cors"
import configurations from '@/config/configurations.js';
import logger from '@/config/logger.js';

connectDB();
const port = process.env.PORT;

app.get('/hello', (req: Request, res: Response) => {
    res.send("Hello")
});

app.use(express.json())
    .use(cors(
        {
            origin: [configurations.frontend_url!],
            credentials: true
        }
    ))
    .use('/api/', pasteRouter)

app.listen(port, () =>
    logger.info(`Listening on ${port}`)
);
import express, { type Request, type Response } from 'express';
const app = express();
import { connectDB } from '@/config/db.js';
import pasteRouter from '@/routes/paste.route.js';
import cors from "cors"
import configurations from '@/config/configurations.js';
import logger from '@/config/logger.js';

connectDB();
const port = process.env.PORT;

app.use(cors({
    origin: [
        "https://snipit-rho.vercel.app",
        "https://snipit-nu.vercel.app",
        "http://localhost:5173",
    ],
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",

}));

app.get('/api', (req: Request, res: Response) => {
    res.send("Hello")
});

app.use(express.json())
    .use('/api/', pasteRouter)

app.listen(port, () =>
    logger.info(`Listening on ${port}`)
);
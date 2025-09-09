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

app.use(cors({
      origin: "https://snipit-rho.vercel.app/",  // Allow only your frontend origin
      credentials: true,  // Allow cookies, authentication headers
      methods: "GET,POST,PUT,DELETE,OPTIONS", // Define allowed HTTP methods
      allowedHeaders: "Content-Type,Authorization", // Define allowed headers
    
}));

app.use(express.json())
    .use('/api/', pasteRouter)

app.listen(port, () =>
    logger.info(`Listening on ${port}`)
);
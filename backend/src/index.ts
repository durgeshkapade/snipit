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
<<<<<<< HEAD
      origin: configurations.frontend_url,  // Allow only your frontend origin
      credentials: true,  // Allow cookies, authentication headers
      methods: "GET,POST,PUT,DELETE,OPTIONS", // Define allowed HTTP methods
      allowedHeaders: "Content-Type,Authorization", // Define allowed headers
    
=======
    origin: [
        "https://snipit-rho.vercel.app",
        "https://snipit-nu.vercel.app"
    ],
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",

>>>>>>> de3f4ea5dfe52b3ac20a9f6a7a6fd679a998061d
}));

app.use(express.json())
    .use('/api/', pasteRouter)

app.listen(port, () =>
    logger.info(`Listening on ${port}`)
);
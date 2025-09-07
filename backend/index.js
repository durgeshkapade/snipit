// server.mjs (or server.js with "type": "module" in package.json)
import express from 'express';
import  {connectDB}  from  './config/db'

const app = express();
app.get('/', (_req, res) => res.send('Hello ESM'));

const port = process.env.PORT || 3000;



app.listen(port, () => 
    console.log(`Listening on ${port}`)
);
